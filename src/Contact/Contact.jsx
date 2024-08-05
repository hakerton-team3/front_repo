import React, { useState, useEffect } from 'react'; 
import * as S from './Contact.styled'; // 스타일 컴포넌트 임포트
import ContactItem from './ContactItem'; // ContactItem 컴포넌트 임포트
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios/axiosInstance'; // axiosInstance 임포트

const Contact = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
     
    const fetchContacts = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }
        
        const response = await axiosInstance.get('/contacts', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        
        if (response.status === 200) {
          setContacts(response.data);
        } else {
          setError(`Error fetching contacts: ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error fetching contacts: ${error.message}`);
      }
    };
    
    fetchContacts();
  }, []);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleCloseClick = () => {
    setPopupOpen(false);
  };

  const handleBackClick = () => {
    navigate('/home'); // 뒤로가기
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSaveContact = async () => {
    if (name && number) {
      const newContact = { name, number, isMain: false };

      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        const response = await axiosInstance.post('/contacts', newContact, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });

        if (response.status === 201 || response.status === 200) {
          const savedContact = response.data; // 응답에서 저장된 연락처 정보 가져오기
          setContacts([...contacts, savedContact]);
          setName('');
          setNumber('');
          setPopupOpen(false);
          setError(null); // Clear any previous errors
        } else {
          setError(`Error saving contact: ${response.statusText}`);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Error: API endpoint not found.');
        } else {
          setError(`Error saving contact: ${error.message}`);
        }
        console.error('Error saving contact:', error);
      }
    } else {
      setError('Name and number are required.');
    }
  };

  const handleUpdate = (id, updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
    );
  };

  const handleDelete = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      const response = await axiosInstance.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });

      if (response.status === 200 || response.status === 204) {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
        setError(null);
      } else {
        setError(`Error deleting contact: ${response.statusText}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Error: API endpoint not found.');
      } else {
        setError(`Error deleting contact: ${error.message}`);
      }
    }
  };

  return (
    <S.MainContainer>
      <S.Containeryellow>
        <S.GradientBackground />
        <S.Text>비상연락망</S.Text>
        <S.Triangle onClick={handleBackClick} />
      </S.Containeryellow>
      <S.BackgroundContainer>
        <S.BackgroundText>
          김서경님, <br />음주 후 위급상황을 대비해 <br /> 
          <S.BackgroundboldText>미리 알림으로 비상연락망을 보내드려요.📞</S.BackgroundboldText>
        </S.BackgroundText>
      </S.BackgroundContainer>
      <S.NotificationContainer>
        <S.NotificationTextRegular>알림으로 보낼 번호의 </S.NotificationTextRegular>
        <S.NotificationTextBold> 네모를 체크해 주세요.</S.NotificationTextBold>
        <S.ButtonContainer onClick={handleButtonClick}>
          <S.GradientBackground2 />
          <S.ButtonText>추가하기</S.ButtonText>
        </S.ButtonContainer>
      </S.NotificationContainer>

      {contacts.map((contact) => (
        <ContactItem 
          key={contact.id} 
          contactId={contact.id}  
          name={contact.name} 
          number={contact.number} 
          onUpdate={handleUpdate} // contact.id와 updatedContact 전달
          onDelete={handleDelete}
        />
      ))}
      
      {isPopupOpen && (
        <S.PopupOverlay>
          <S.PopupContainer>
            <S.CloseButton onClick={handleCloseClick} />
            <S.InputContainer>
              <S.InputBox style={{ top: 0 }}>
                <input 
                  type="text" 
                  value={name} 
                  onChange={handleNameChange} 
                  placeholder="이름을 입력하시오."
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'none' }}
                />
              </S.InputBox>
              <S.InputBox style={{ top: '77px' }}>
                <input 
                  type="text" 
                  value={number} 
                  onChange={handleNumberChange} 
                  placeholder="전화번호를 입력하시오."
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'none' }}
                />
              </S.InputBox>
              <S.SaveButton onClick={handleSaveContact}>
                <S.SaveButtonText>전화번호 저장하기</S.SaveButtonText>
              </S.SaveButton>
            </S.InputContainer>
            {error && (
              <S.ErrorMessage>{error}</S.ErrorMessage>
            )}
          </S.PopupContainer>
        </S.PopupOverlay>
      )}
    </S.MainContainer>
  );
}

export default Contact;

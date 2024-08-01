// src/Contact/Contact.jsx
import React, { useState, useEffect } from 'react'; 
import * as S from './Contact.styled';
import ContactItem from './ContactItem';
import { useNavigate } from 'react-router-dom';
import { getContacts, createContact, deleteContact, updateContact } from '../api/contactApi';

const Contact = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsData = await getContacts();
        setContacts(contactsData);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
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

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSaveContact = async () => {
    if (name && phone) {
      try {
        const newContact = { 
          name, 
          number: phone,  // 서버가 요구하는 필드명에 맞춰 변경
          isMain: false  // 기본값 설정
        }; 
        console.log('Saving contact with data:', newContact); // 로그 추가
        const savedContact = await createContact(newContact);
        setContacts([...contacts, savedContact]);
        setName('');
        setPhone('');
        setPopupOpen(false);
      } catch (error) {
        console.error('Failed to save contact:', error);
      }
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact(contactId);
      setContacts(contacts.filter(contact => contact.id !== contactId));
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const handleUpdateContact = async (contactId, updatedContact) => {
    try {
      const updated = await updateContact(contactId, updatedContact);
      setContacts(contacts.map(contact => (contact.id === contactId ? updated : contact)));
    } catch (error) {
      console.error('Failed to update contact:', error);
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

      {contacts.map((contact, index) => (
        <ContactItem 
          key={index} 
          name={contact.name} 
          phone={contact.number}  // 서버에서 반환하는 데이터 형식에 맞춰 변경
          onDelete={() => handleDeleteContact(contact.id)}
          onUpdate={(updatedContact) => handleUpdateContact(contact.id, updatedContact)}
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
                  value={phone} 
                  onChange={handlePhoneChange} 
                  placeholder="전화번호를 입력하시오."
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'none' }}
                />
              </S.InputBox>
              <S.SaveButton onClick={handleSaveContact}>
                <S.SaveButtonText>전화번호 저장하기</S.SaveButtonText>
              </S.SaveButton>
            </S.InputContainer>
          </S.PopupContainer>
        </S.PopupOverlay>
      )}
    </S.MainContainer>
  );
}

export default Contact;

import React, { useState } from 'react'; 
import * as S from './Contact.styled';
import ContactItem from './ContactItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [contacts, setContacts] = useState([
     
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 
  
  const navigate = useNavigate();

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
      const newContact = { name, number };

      try {
        const response = 
        await axios.
        post('http://ec2-43-201-61-252.ap-northeast-2.compute.amazonaws.com:8080/api/v1/contacts',
           newContact, { withCredentials: true});
        if (response.status === 200) {
          setContacts([...contacts, newContact]);
          setName('');
          setNumber('');
          setPopupOpen(false);
        }  
      } catch (error) {
        console.error('Error saving contact:', error);
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

      {contacts.map((contact, index) => (
        <ContactItem key={index} name={contact.name} number={contact.number} />
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
          </S.PopupContainer>
        </S.PopupOverlay>
      )}
    </S.MainContainer>
  );
}

export default Contact;

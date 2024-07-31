import React from 'react';
import * as S from '../Contact/Contact.styled';

const ContactItem = ({ name, phone }) => {
  return (
   
    <S.OuterContainer>
      
       <S.InnerContainer>
         <S.Background />
         <S.NameText>홍길동</S.NameText>
         <S.PhoneText>010-1234-1234</S.PhoneText>
         <S.EditDeleteText>수정  |  삭제</S.EditDeleteText>
         <S.CheckBox />
       </S.InnerContainer>
     </S.OuterContainer>
  );
}

export default ContactItem;

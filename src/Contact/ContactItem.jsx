import React from 'react';
import * as S from './Contact.styled';

const ContactItem = ({ name, number }) => {
  return (
    <S.OuterContainer>
      <S.InnerContainer>
        <S.Background />
        <S.NameText>{name}</S.NameText>
        <S.PhoneText>{number}</S.PhoneText>
        <S.EditDeleteText>수정  |  삭제</S.EditDeleteText>
        <S.CheckBox />
      </S.InnerContainer>
    </S.OuterContainer>
  );
}

export default ContactItem;

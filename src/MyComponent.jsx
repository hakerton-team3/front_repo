import React from 'react';
import * as S from './EmergencyContacts.styled';

const MyComponent = () => {
  return (
    
    <S.MainContainer>
    {[...Array(1)].map((_, index) => (
      <React.Fragment key={index}>
        <S.SmallContainer>
          <S.DeleteText>삭제</S.DeleteText>
        </S.SmallContainer>
        <S.ContactContainer>
          <S.ContactText>홍길동 | 010-1234-5678</S.ContactText>
        </S.ContactContainer>
        <S.OvalContainer>
          <S.InnerOval />
        </S.OvalContainer>
      </React.Fragment>
    ))}
  </S.MainContainer>
  );
}

export default MyComponent;

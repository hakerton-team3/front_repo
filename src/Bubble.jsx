import React from 'react';
import * as S from './EmergencyContacts.styled';

const Bubble = ({ text }) => {
  return (
    <S.BubbleContainer>
      <S.BubbleText>{text}</S.BubbleText>
    </S.BubbleContainer>
  );
}

export default Bubble;

// GrayContainerComponent.js
import React from 'react';
import * as S from './result.styled.js';

const GrayContainerComponent = ({ imageSrc, text }) => {
  return (
    <S.Graycontainer>
      <S.CheckCircle />
      <S.ContainerImage src={imageSrc} alt="logo" />
      <S.WarningText dangerouslySetInnerHTML={{ __html: text }} />
    </S.Graycontainer>
  );
};

export default GrayContainerComponent;

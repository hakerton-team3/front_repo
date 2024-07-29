import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Personal.styled'; 

function Personal() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <S.GlobalStyle />
      <S.CommunityContainer>
        <S.ButtonContainer>
            <S.ImageButton onClick={() => navigateTo('/community')}>
            <img src="/단체게시판1.png" alt="Community Board" />
            </S.ImageButton>
            <S.ImageButton onClick={() => navigateTo('/personal')}>
            <img src="/혼잣말게시판1.png" alt="Personal Board" />
        </S.ImageButton>
        </S.ButtonContainer>
            

      </S.CommunityContainer>
    </>
  );
}

export default Personal;

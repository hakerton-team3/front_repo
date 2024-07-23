// RegisterScreen.js
import React from 'react';
import * as S from './RegisterScreen.styled';
import HorizontalScroll from './HorizontalScroll';
import Bubble from '../Bubble';
import { useNavigate } from 'react-router-dom';
 
 
  

const RegisterScreen = () => {
  const navigate = useNavigate();

  const handleTestLogin = () => {
    navigate('/test'); // Home 화면으로 이동
  };
  return (
    <S.MainContainer>
      <S.GlobalStyle />
      <S.Title>환영해요,</S.Title>
      <Bubble text="앞으로 사용할 유저님의 회원정보를 입력해주세요." />
      <S.Input type="text" placeholder="사용자 이름을 입력하세요." />
      <S.Input type="email" placeholder="사용자 이메일을 입력하세요." />
      <S.Input type="password" placeholder="사용자 패스워드를 입력하세요." />
      <S.Link href="#">이미 계정을 가지고 있나요?</S.Link>
      <S.Button onClick={handleTestLogin}><S.FooterText>계정 가입하기</S.FooterText></S.Button>
      {/* <S.Button onClick={handleGuestLogin}>게스트 입장 로그인하기</S.Button> */}
      <S.Divider></S.Divider>
      
      <S.FooterText>혹은, SNS로 가입을 원하시나요?</S.FooterText>
      <HorizontalScroll></HorizontalScroll>
      <S.IconContainer>
        
      </S.IconContainer>
    </S.MainContainer>
  );
};

export default RegisterScreen;

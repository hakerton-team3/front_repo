// RegisterScreen.js
import React from 'react';
import * as S from './RegisterScreen.styled';
import Bubble from '../Bubble';
import { useNavigate } from 'react-router-dom';
import Kakaoimage from '../images/kakaotalk.png';
import Naverimage from '../images/naver.png';
import Googleimage from '../images/google.png';
 
  

const RegisterScreen = () => {
  const navigate = useNavigate();

  const handleTestLogin = () => {
    navigate('/test'); // Home 화면으로 이동
  };
  return (
    <S.MainContainer>
      <S.GlobalStyle />
      <S.Title>환영해요,</S.Title>
      <S.BubbleContainer>
      <S.BubbleText>앞으로 사용할 유저님의 회원정보를 입력해주세요.</S.BubbleText>
    </S.BubbleContainer>
    
 
      <S.Input type="text" placeholder="사용자 이름을 입력하세요." />
      <S.Input type="email" placeholder="사용자 이메일을 입력하세요." />
      <S.Input type="password" placeholder="사용자 패스워드를 입력하세요." />
      <S.Link href="#">이미 계정을 가지고 있나요?</S.Link>
      <S.Button onClick={handleTestLogin}><S.FooterText>계정 가입하기</S.FooterText></S.Button>
 
      
      <S.Divider></S.Divider>
      
      <S.FooterText>혹은, SNS로 가입을 원하시나요?</S.FooterText>
      <S.IconContainer2>
      <S.Image2 src={Naverimage} alt="logo" />
      <S.Image2 src={Kakaoimage} alt="logo" />
      <S.Image2 src={Googleimage} alt="logo" />

      </S.IconContainer2>
       
    </S.MainContainer>
  );
};

export default RegisterScreen;

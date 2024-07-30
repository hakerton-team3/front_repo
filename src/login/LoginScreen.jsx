import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginScreen.styled';
import Logoimage from '../images/logo.png';
import Kakaoimage from '../images/kakaotalk.png';
import Naverimage from '../images/naver.png';
import Googleimage from '../images/google.png';
 
const LoginScreen = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate('/home'); // Home 화면으로 이동
  };

  return (
    <S.MainContainer>
      <S.GlobalStyle />
      <S.Image src={Logoimage} alt="logo" />
      <S.Title>건강한 음주 생활을 위하여,</S.Title>
      <S.Subtitle>추적주적 챙겨가는 알코올과 음주 습관을 추적하는</S.Subtitle>
      <S.Input type="text" placeholder="사용자 아이디를 입력하세요." />
      <S.Input type="password" placeholder="사용자 패스워드를 입력하세요." />
      <S.Button onClick={handleGuestLogin}>회원으로 로그인하기</S.Button>
      <S.LinkContainer>
        <S.Link href="calendar">비밀번호 찾기</S.Link> 
          <S.Textdiv>|</S.Textdiv>   
        <S.Link href="/register">추적주적 회원가입</S.Link>
        
      </S.LinkContainer>
      <S.Button2 onClick={handleGuestLogin}>3초만에 시작하기🚀</S.Button2>
      <S.IconContainer2>
      <S.Image2 src={Naverimage} alt="logo" />
      <S.Image2 src={Kakaoimage} alt="logo" />
      <S.Image2 src={Googleimage} alt="logo" />

      </S.IconContainer2>
     
      <S.BackContainer>
      <S.FooterText>주적<br />酒적</S.FooterText> 
     
      

      </S.BackContainer>
    </S.MainContainer>
    
  );
};

export default LoginScreen;

import React, { useState } from 'react'; // useState를 react로부터 임포트
import { useNavigate } from 'react-router-dom';
import * as S from './LoginScreen.styled';
import Logoimage from '../images/logo.png';
import Kakaoimage from '../images/kakaotalk.png';
import Naverimage from '../images/naver.png';
import Googleimage from '../images/google.png';
import axiosInstance from '../axios/axiosInstance'; // axiosInstance import

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGuestLogin = () => {
    navigate('/home'); // Home 화면으로 이동
  };
 const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/users/login', formData);
      const token = response.data.token;

      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`; // 토큰 설정

      console.log('Login successful');
      navigate('/home');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('로그인 실패: 아이디와 비밀번호를 확인하세요.');
      } else {
        console.error('Error logging in:', error);
        alert('로그인 실패: 서버에 문제가 발생했습니다.');
      }
    }
  };
  return (
    <S.MainContainer>
      <S.GlobalStyle />
      <S.Image src={Logoimage} alt="logo" />
      <S.Title>건강한 음주 생활을 위하여,</S.Title>
      <S.Subtitle>추적주적 챙겨가는 알코올과 음주 습관을 추적하는</S.Subtitle>
      <S.Input 
        type="email" 
        placeholder="사용자 이메일을 입력하세요." 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
      />
      <S.Input 
        type="password" 
        placeholder="사용자 패스워드를 입력하세요." 
        name="password" 
        value={formData.password} 
        onChange={handleChange}
      />
      <S.Button onClick={handleLogin}>회원으로 로그인하기</S.Button>
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

// src/login/RegisterScreen.js
import React, { useState } from 'react';
import * as S from './RegisterScreen.styled';
import { useNavigate } from 'react-router-dom';
import Kakaoimage from '../images/kakaotalk.png';
import Naverimage from '../images/naver.png';
import Googleimage from '../images/google.png';
import axiosInstance from '../axios/axiosInstance';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/users', formData);
      console.log('User created:', response.data);
      navigate('/test'); // 회원가입 성공 시 로그인 화면으로 이동
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <S.MainContainer>
      <S.GlobalStyle />
      <S.Title>환영해요,</S.Title>
      <S.BubbleContainer>
        <S.BubbleText>앞으로 사용할 유저님의 회원정보를 입력해주세요.</S.BubbleText>
      </S.BubbleContainer>

      <form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          name="name"
          placeholder="사용자 이름을 입력하세요."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <S.Input
          type="email"
          name="email"
          placeholder="사용자 이메일을 입력하세요."
          value={formData.email}
          onChange={handleChange}
          required
        />
        <S.Input
          type="password"
          name="password"
          placeholder="사용자 패스워드를 입력하세요."
          value={formData.password}
          onChange={handleChange}
          required
        />
        <S.Link href="/">이미 계정을 가지고 있나요?</S.Link>
        <S.Button type="submit">
          <S.FooterText>계정 가입하기</S.FooterText>
        </S.Button>
      </form>

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

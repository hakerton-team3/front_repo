import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './LoginScreen.styled';
import Logoimage from '../image/logo.png';
import Kakaoimage from '../image/kakaotalk.png';
import Naverimage from '../image/naver.png';
import Googleimage from '../image/google.png';
import axiosInstance from '../axios/axiosInstance';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const socialLoginSuccess = params.get('social-login-success');

    if (socialLoginSuccess === 'true') {
      handleSocialLogin();
    }
  }, [location.search]);

  const fetchAdditionalData = async (accessToken) => {
    try {
      const [abtiDataResponse, usernameDataResponse] = await Promise.all([
        axiosInstance.get('/user-infos/user-abti', {
          headers: { 'Authorization': `Bearer ${accessToken}` },
        }),
        axiosInstance.get('/user-infos/user-name', {
          headers: { 'Authorization': `Bearer ${accessToken}` },
        }),
      ]);

      const { name } = usernameDataResponse.data;
      const { title } = abtiDataResponse.data;

      localStorage.setItem('name', name);
      localStorage.setItem('title', title);

      return { abti: title };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { abti: null };
      } else {
        throw new Error('Error fetching additional data');
      }
    }
  };

  const handleSocialLogin = async () => {
    try {
      const response = await axiosInstance.get('/tokens/refresh');
      const { accessToken, NeedAbti } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      if (NeedAbti) {
        navigate('/test');
      } else {
        const additionalData = await fetchAdditionalData(accessToken);

        if (additionalData.abti) {
          navigate('/home');
        } else {
          navigate('/test');
        }
      }
    } catch (error) {
      console.error('Error during social login:', error);
      alert('소셜 로그인 처리 중 오류가 발생했습니다.');
    }
  };

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
      // 첫 번째 API 호출: 로그인 요청
      const loginResponse = await axiosInstance.post('/users/login', formData);
      const { accessToken } = loginResponse.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        console.log('Login successful, fetching additional data...');

        try {
          // 두 번째 API 호출: 이름과 abti 가져오기
          const abtiDataResponse = await axiosInstance.get(
            '/user-infos/user-abti',
            {
              headers: { 'Authorization': `Bearer ${accessToken}` },
            }
          );
          const usernameDataResponse = await axiosInstance.get(
            '/user-infos/user-name',
            {
              headers: { 'Authorization': `Bearer ${accessToken}` },
            }
          );
          
          const { name } = usernameDataResponse.data;
          const { title } = abtiDataResponse.data;

          const userData = {
            name: name,
            resultTitle: title
          };
          
          localStorage.setItem('userData', JSON.stringify(userData));

          navigate('/home');
        } catch (additionalDataError) {
          if (additionalDataError.response && additionalDataError.response.status === 404) {
            console.log('ABTI not found, navigating to /test');
            navigate('/test');
          } else {
            console.error('Error fetching additional data:', additionalDataError);
            alert('정보를 가져오는 데 실패했습니다.');
          }
        }
      }
    } catch (loginError) {
      if (loginError.response && loginError.response.status === 401) {
        alert('로그인 실패: 아이디와 비밀번호를 확인하세요.');
      } else {
        console.error('Error logging in:', loginError);
        alert('로그인 실패: 서버에 문제가 발생했습니다.');
      }
    }
  };

  return (
    <S.MainContainer> 
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
        <S.Link href="/register">추적주적 회원가입</S.Link>
      </S.LinkContainer>
       
      <S.IconContainer2>
        <S.Link href="https://api.smartcheers.site/api/v1/oauth2/authorization/naver" target="_blank" rel="noopener noreferrer">
          <S.Image2 src={Naverimage} alt="Naver logo" />
        </S.Link>
        <S.Link href="https://api.smartcheers.site/api/v1/oauth2/authorization/kakao" target="_blank" rel="noopener noreferrer">
          <S.Image2 src={Kakaoimage} alt="Kakao logo" />
        </S.Link>
        <S.Link href="https://api.smartcheers.site/api/v1/oauth2/authorization/google" target="_blank" rel="noopener noreferrer">
          <S.Image2 src={Googleimage} alt="Google logo" />
        </S.Link>
      </S.IconContainer2>
      <S.BackContainer>
        <S.FooterText>주적<br />酒적</S.FooterText>
      </S.BackContainer>
    </S.MainContainer>
  );
};

export default LoginScreen;

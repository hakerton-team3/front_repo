import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as S from './App.styled';
import Home from './Home';
import Community from './Community';
import Calendar from './Calendar';
import Statistics from './Statistics';
import EmergencyContacts from './EmergencyContacts'; // 비상연락망 페이지 컴포넌트를 추가
import LoginScreen from './login/LoginScreen'; // 로그인 화면 컴포넌트를 추가
import RegisterScreen from './login/RegisterScreen'; // 회원가입 화면 컴포넌트를 추가
import Test from './mbti/test'; // 
import PrivacyPost from './PrivacyBoard/Privacy';
import Result from './mbti/result.jsx';
import RedHome from './RedHome.jsx';
import Contact from './Contact/Contact.jsx';
 
 

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthRoute = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/test' || location.pathname === '/result';

  const handleBackClick = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <S.Container>
     
      {!isAuthRoute && (
        <>
          <S.HeaderText>주적주적</S.HeaderText>
          <S.Nav>
            <S.StyledLink to="/home">홈화면</S.StyledLink>
            <S.StyledLink to="/community">커뮤니티</S.StyledLink>
            <S.StyledLink to="/calendar">캘린더</S.StyledLink>
            <S.StyledLink to="/statistics">통계분석</S.StyledLink>
            <S.BackButton onClick={handleBackClick}>뒤로가기</S.BackButton>
          </S.Nav>
        </>
      )}
      <Routes>
        <Route path="/" element={<LoginScreen />} /> {/* 첫 화면을 LoginScreen으로 설정 */}
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} /> 
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} /> {/* 비상연락망 페이지 라우트 추가 */}
        <Route path="/register" element={<RegisterScreen />} /> {/* 회원가입 페이지 라우트 추가 */}
        <Route path='/test' element={<Test />} /> {/* Test 페이지 라우트 추가 */}
        <Route path='/result' element={<Result />} /> {/* Result 페이지 라우트 추가 */}
        <Route path="/privacy" element={<PrivacyPost />} /> {/* 개인 게시판 라우트 추가 */}
        <Route path='/redhome' element={<RedHome/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </S.Container>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

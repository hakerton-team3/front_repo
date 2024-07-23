import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import * as S from './App.styled';
import Home from './Home';
import Community from './Community';
import Calendar from './Calendar';
import Statistics from './Statistics';
import EmergencyContacts from './EmergencyContacts'; // 비상연락망 페이지 컴포넌트를 추가
import LoginScreen from '../src/login/LoginScreen'; // 로그인 화면 컴포넌트를 추가
import RegisterScreen from './login/RegisterScreen'; // 회원가입 화면 컴포넌트를 추가
import PrivacyPost from './PrivacyBoard/Privacy.jsx';

const App = () => {
  const location = useLocation();

  const isAuthRoute = location.pathname === '/' || location.pathname === '/register';

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
        <Route path="/privacy" element={<PrivacyPost />} /> {/* 개인 개시판 라우트 추가 */}
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

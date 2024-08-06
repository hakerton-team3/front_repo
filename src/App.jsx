import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as S from './App.styled';
import Home from './Home';
import Community from './Community';
import Calendar from './Calendar';
import Statistics from './Statistics';
import EmergencyContacts from './EmergencyContacts';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './login/RegisterScreen';
import Test from './mbti/test';
import PrivacyPost from './PrivacyBoard/Privacy';
import Result from './mbti/result.jsx';
import RedHome from './RedHome.jsx';
import Contact from './Contact/Contact.jsx';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthRoute = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/test' || location.pathname === '/result';

   
 
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
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path='/test' element={<Test />} />
        <Route path='/result' element={<Result />} />
        <Route path="/privacy" element={<PrivacyPost />} />
        <Route path='/redhome' element={<RedHome />} />
        <Route path='/contact' element={<Contact />} />
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

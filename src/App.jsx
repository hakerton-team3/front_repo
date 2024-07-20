import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import Home from './Home';
import Community from './Community';
import Calendar from './Calendar';
import Statistics from './Statistics';
import EmergencyContacts from './EmergencyContacts'; // 비상연락망 페이지 컴포넌트를 추가

function App() {
  return (
    <Router>
      <S.Container>
        <S.HeaderText>주적주적</S.HeaderText>
        <S.Nav>
          <S.StyledLink to="/">홈화면</S.StyledLink>
          <S.StyledLink to="/community">커뮤니티</S.StyledLink>
          <S.StyledLink to="/calendar">캘린더</S.StyledLink>
          <S.StyledLink to="/statistics">통계분석</S.StyledLink>
        </S.Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} /> {/* 비상연락망 페이지 라우트 추가 */}
        </Routes>
      </S.Container>
    </Router>
  );
}

export default App;

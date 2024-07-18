import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Community from './Community';
import Calendar from './Calendar';
import Statistics from './Statistics';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }

  &.active {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Router>
      <Nav>
        <StyledLink to="/">홈화면</StyledLink>
        <StyledLink to="/community">커뮤니티</StyledLink>
        <StyledLink to="/calendar">캘린더</StyledLink>
        <StyledLink to="/statistics">통계분석</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;

import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'chab', sans-serif;
    color: #333; /* 기본 폰트 색상 */
  }
`;

export const Container = styled.div`
  text-align: center;
`;

export const HeaderText = styled.h1`
  font-family: 'chab';
  color: #ffCE4F; /* 원하는 폰트 색상 */
  
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  padding: 5%;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: grey;
  font-weight: bold;

  &.active {
    color: black;
    text-decoration: underline;
  }

  &:hover {
     
  }
`;

export const BackButton = styled.button`
  background-color: #FFCE4F;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #FFC107;
  }
`;

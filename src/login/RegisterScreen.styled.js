// RegisterScreen.styled.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
 
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #FFCE4F;
  margin-right: 30%;
  margin-top: 30%;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 70%;
  height: 70%;
  padding: 20px;
  margin: 10px 0;
  border: 2px solid #FFCE4F;
  border-radius: 20px;
`;

export const Button = styled.button`
  width: 320px;
  height: 50px;
  padding: 10px;
  background-color: #FFCE4F;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
  font-color: black;
display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
`;

export const Link = styled.a`
  font-size: 12px;
  color: black;
  text-decoration: none;
  margin: 5px;
  &:hover {
    text-decoration: underline;
  }
  margin-left: 30%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: black;
  text-align: center;
  
`;
export const Divider = styled.div`
  width: 100%; /* 구분선의 너비 */
  height: 1px; /* 구분선의 높이 */
  background-color: gray; /* 구분선 색상 */
  margin: 10%;
`;

 
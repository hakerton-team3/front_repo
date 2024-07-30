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
  justify-content: start;
  
 
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #FFCE4F;
  margin-right: 40%;
  margin-top: 50%;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 70%;
  height: 30px;
  padding: 10px;
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
  margin: 5%;
  display: flex;
`;

export const IconContainer2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
 
`;

export const Image2 = styled.img`

width: 100%; /* 이미지의 크기를 조정 */
height: auto;
margin-left: 10%;
margin-bottom: 5%;
 
`;


export const Colmun = styled.div`
display: flex;
flex-direction: colmun;
 
 
`;


export const BubbleContainer = styled.div`
  position: relative;
  background: #FFCE4F;
  border-radius: 1.0em;
  padding: 3% 3%;
  color: black;
  margin: 5%;
  font-size:10px;
  margin-right: 30%;
  margin-bottom: 10%; 


  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #FFCE4F;
    border-bottom: 0;
    border-left: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
`;

export const BubbleText = styled.p`
  margin: 0;
  padding: 0;
`;
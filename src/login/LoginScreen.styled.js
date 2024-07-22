// LoginScreen.styled.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    
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
  
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  max-width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  height: 7%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #FFCE4F;
  border-radius: 20px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 10px;
  height: 8%;
  background-color: #FFCE4F;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  margin-top: 10px;
`;

export const Link = styled.a`
  font-size: 12px;
  color: #666;
  text-decoration: none;
  margin: 5px;
  &:hover {
    text-decoration: underline;
  }
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
font-family: 'chab';
  font-size: 100px;
  color: white;
  text-align: center;
  margin-top: 20px;
  max-width: 300px;
  
`;

export const Image = styled.img`
  width: auto; /* 이미지의 크기를 조정 */
  height: auto;
  margin-bottom: 5%;
 
`;


export const BackContainer = styled.div`
width: 100%;
  height: 100%;
  background: 
    linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),
    url('src/images/image2.png');
  background-size: cover;
  background-position: bottom; /* Adjusted to position the image at the bottom */
     display: flex;
  justify-content: center;
  `;


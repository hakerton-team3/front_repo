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
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 20px;
`;

export const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const QuestionText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const RatingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const RatingCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  transition: background-color 0.3s, width 0.3s, height 0.3s;
  border: 2px solid #FFCE4F;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.selected::before {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    background-color: #FFCE4F;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RatingText = styled.div`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

export const Bubble = styled.div`
  background-color: #FFCE4F;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  width: 80%;
  text-align: center;
`;

export const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;

export const Image = styled.img`
  width: 50%; /* 이미지의 크기를 조정 */
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

  export const FooterText = styled.p`
  font-family: 'chab';
    font-size: 100px;
    color: white;
    text-align: center;
    margin-top: 20px;
    max-width: 300px;
    
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
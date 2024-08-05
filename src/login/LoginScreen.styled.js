// LoginScreen.styled.js
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
 
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
  width: 50%;
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
  font-family: 'LotteriaChab';
  font-size: 100px;
  color: white;
  text-align: center;
  margin-top: 20px;
  max-width: 300px;
  
`;

export const Image = styled.img`
  width: auto; /* 이미지의 크기를 조정 */
  height: auto;
  margin: 10%;
`;

export const Textdiv = styled.div`
  margin-left:5%;
  margin-right:5%;
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
  margin-top: 10%;
`;


export const Button2 = styled.button`
  width: 50%;
  max-width: 320px;
  height: 8%;
  background-color: #FFFFFF;
  color: black;
  border: 2px solid white; /* 여기서 색상을 변경할 수 있습니다 */
  border-radius: 20px;  
  cursor: pointer;
  font-size: 16px;
  margin-top: 5%;
  box-shadow: 0px 0px 3.4px rgba(0, 0, 0, 0.25);
`;

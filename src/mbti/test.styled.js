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
  
  flex-direction: column;
  align-items: center;
   overflow-x: hidden;
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 20%;
  margin-right: 40%;
 
`; 
export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
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

 
export const Image = styled.img`
  width: 50%; /* 이미지의 크기를 조정 */
  height: auto;
  margin-bottom: 5%;
  margin-top: 5%;
 
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

export const Link = styled.div`
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


export const Container = styled.div`
  text-align: center;
  margin-top: 10%;
`;

export const Instruction = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
 
  width: 200px;
  margin: 0 auto 20px;
  border-bottom: 2px solid #000;
`;

export const InputLine = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  text-align: center;
  
  bottom: 0;
  background: transparent;
  color: black; /* 텍스트 색상 */
  caret-color: black; /* 커서 색상 */
  font-family: inherit;
  
  &::placeholder {
    color: transparent;
  }
`;

export const InputText = styled.span`
  display: block;
  width: 100%;
  font-size: 18px;
  text-align: center;
 
  bottom: 5px;
  left: 0;
  pointer-events: none;
  color: black;
  font-family: inherit;
  transition: color 0.2s;
`;

export const MainText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #000;
`;

export const Highlight = styled.span`
  color: #FFCE4F; // 노란색
  font-family: 'chab';  
`;

export const SubHighlight = styled.span`
  color: #FFCE4F;
  font-family: 'chab';
`;



export const BubbleContainer = styled.span`
position: relative;
background: #FFCE4F;
border-radius: 1.0em;
padding: 3% 3%; /* 필요에 따라 패딩을 조정하세요 */
color: black;
margin-left: 10%;
font-size: 10px;
width: 60%;
margin-right: 25%;
height: 60px; /* 원하는 높이로 설정 */
display: flex;
flex-direction: column;
justify-content: center; /* 자식 요소를 수직 중앙 정렬 */
align-items: flex-start; /* 자식 요소를 왼쪽 정렬 */
`;


export const BubbleContainertext = styled.text`
font-size: 14px;
  font-weight: bold;
    color: black;
`;


export const BubbleContainertext2 = styled.text`
font-size: 13px;
    color: black;
    text-align: start;
`;


export const BubbleContainer2 = styled.span`
position: relative;
background: #FFCE4F;
border-radius: 1.0em;
padding: 3% 3%; /* 필요에 따라 패딩을 조정하세요 */
color: black;
margin-left: 10%;
font-size: 10px;
width: 65%;
margin-right: 20%;
height: 30px; /* 원하는 높이로 설정 */
display: flex;
flex-direction: column;
justify-content: center; /* 자식 요소를 수직 중앙 정렬 */
align-items: flex-start; /* 자식 요소를 왼쪽 정렬 */
margin-top: 5%;
`;
export const Divider = styled.div`

width: 80%; /* 구분선의 너비 */
height: 1px; /* 구분선의 높이 */
background-color: black; /* 구분선 색상 */
 margin: 15% auto; /* 구분선을 수평 중앙으로 정렬 */
`;

export const Container3 = styled.div`
  width: 350px;
  height: 190px;
  display: flex;
  justify-content: center; /* 자식 요소를 수평 중앙 정렬 */
  align-items: center; /* 자식 요소를 수직 중앙 정렬 */
  flex-direction: column; /* 컬럼 방향으로 정렬 */
   margin: -10% auto; /* 구분선을 수평 중앙으로 정렬 */
`;

export const BubbleContainer3 = styled.span`
position: relative;
background: #FFCE4F;
border-radius: 3.0em;
padding: 3% 3%; /* 필요에 따라 패딩을 조정하세요 */
color: black;
font-size: 10px;
width: 90%;
height: 30px; /* 원하는 높이로 설정 */
display: flex;
flex-direction: column;
justify-content: center; /* 자식 요소를 수직 중앙 정렬 */
margin-top: 5%;
`;

export const BubbleContainertext3 = styled.text`
font-size: 13px;
    color: black;
      font-weight: bold;
    text-align: center;
`;
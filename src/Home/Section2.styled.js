// Section2.styled.js
import styled, { createGlobalStyle } from 'styled-components';

// Global style to include the custom font
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;

// Main container style
export const MainContainer = styled.div`
  width: 100%;
  background-color: #FFCE4F;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10%; /* Add this line to remove bottom padding */
  margin-bottom: 0; /* Add this line to remove bottom margin */
`;

// Title style
export const Title = styled.div`
  margin-top: 5%;
  font-size: 12px;
`;

// Wrapper for horizontal scrolling
export const ScrollWrapper = styled.div`
  width: 90%;
  overflow-x: auto;
  display: flex;
  margin-top: 5%;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

// Card container style
export const CardContainer = styled.div`
  min-width: 160px;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10%;
  margin-right: 5%; /* Space between cards */
  position: relative; /* Needed for the hole */
`;

export const ContainererText = styled.h1`
  font-family: 'chab';
  color: black;
  font-size: 38px;
  text-align: left; /* Align text to the left */
  padding-left: 10%; /* Add padding to the left */
  
  width: 100%; /* Make sure the text takes the full width of the container */
`;

export const LongText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Hole = styled.div`
  width: 20px;
  height: 20px;
  background-color: #FFCE4F;
  border: 2px white ;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
`;


export const ModalTitle = styled.div`
  font-size: 40px;
  color: #FFCE4F;
  text-align: center;
  font-weight: bold;
  font-family: 'chab';
`;

export const ModalTitle3 = styled.div`
  font-size: 40px;
  color: #FFCE4F;
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
  font-family: 'chab';
`;

export const ModalTitle6 = styled.div`
  font-size: 40px;
  color: #EF4444;
  text-align: center;
  font-weight: bold;
`;

export const ModalContent = styled.div`
  font-size: 11px;
  color: #000000;
  text-align: center;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BadgeImage = styled.img`
  width: 75px;
  height: 90px;
  margin: 5px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 (이미지 높이에 따라 조정 가능) */
  flex-wrap: wrap;        /* 이미지가 컨테이너를 넘어가면 줄 바꿈 */
  gap: 10px;              /* 이미지 간의 간격 */
  margin-top: 20px;       /* 타이틀과 이미지 간의 간격 */
`;

export const Badge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

export const BadgeText = styled.div`
    font-size: 15px;
    color: #555;
    text-align: center;
    margin-top: 5px;
`;

export const BorderedText = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  border: 2px solid #FFCE4F; /* 테두리 색상과 두께 */
  border-radius: 12px; /* 둥근 모서리 */
  padding: 10px; /* 텍스트와 테두리 사이의 여백 */
  font-size: 16px; /* 텍스트 크기 */
  color: #000000; /* 텍스트 색상 */
  height: 30px;
  background-color: #ffffff; /* 배경 색상 (선택 사항) */
  margin-top: 30px;
`;

export const AppContainer = styled.div`
  margin: 30px;
`;

export const GoalContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  margin: 10px;
`;

export const GoalLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  margin-right: 20px;
  margin-top: 10px;
`;

export const GoalLabel2 = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  margin-right: 54px;
  margin-top: 10px;
`;

export const GoalInput = styled.input`
  width: 40%;
  padding: 8px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 16px;
  border: none;
  border: 2px solid #FFCE4F;
  outline: none;
`;

export const Underline = styled.div`
  width: 100%;
  height: 0.2px;
  background-color: #000;
  margin-top: 10px;
`;


export const JudalImage = styled.img`
  width: 350px;
  height: 190px;
  margin: 10px;
`;

export const JudalImage2 = styled.img`
  width: 260px;
  height: 140px;
  margin-left: 50px;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #FFCE4F;
  color: #000;
  width: 355px;
  height: 60px;
  font-size: 16px; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1px;
  font-weight: bold;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  
  &:hover {
    background-color: #ffd710;
  }
`;

export const GemjuContainer = styled.div`
  color: #000;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  `;

export const H1 = styled.h1`
    margin: 10px;
    color: #EF4444;
  `;
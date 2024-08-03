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
  font-family: 'chab';
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
  font-family: 'chab';
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


export const BorderedTextSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;   
  border: 2px solid #FFCE4F; 
  border-radius: 30px;
  padding: 5px; 
  font-size: 16px; 
  font-weight: bold;
  color: #000000; 
  height: 20px;
  width: 156px;
  margin-top: 10px;
  background-color: #ffffff; 
`;


export const BorderedBtn = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;    
  border: 2px solid #FFCE4F; 
  border-radius: 12px; 
  padding: 25px; 
  font-size: 16px; 
  color: #000000; 
  height: 30px;
  width: 320px;
  background-color: #ffffff; 
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
  margin-top: 10px;
`;

export const JudalImage3 = styled.img`
  width: 350px;
  height: 190px;
  margin: 0px;
`;

export const JudalImage4 = styled.img`
  width: 350px;
  height: 190px;
  margin: 10px;
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

export const H1 = styled.p`
    margin: 10px;
    font-size: 30px;
    color: #EF4444;
    font-family: 'chab';
  `;

export const CircleContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center; /* 중앙 정렬 */
  margin-top: 20px; /* 원하는 경우 여백 추가 */
`;

export const AttendanceButton = styled.button`
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #000;
  width: 129px;
  height: 52px;
  font-size: 16px; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center; 
  align-items: center;   
  
  &:hover {
    background-color: #ffd710;
  }
`;

export const AttendanceTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-top: 10px;
  gap: 2px; /* 요소 간 간격 */
`;

export const AttendanceContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  gap: 20px;
`;

export const RatingCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #D9D9D9; /* 클릭 전 기본 배경색 */
  transition: background-color 0.3s, width 0.3s, height 0.3s;
  border: 2px solid white; /* 기본 테두리 색 */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.selected {
    background-color: white; /* 클릭 시 배경색 */
    border-color: #FFCE4F; /* 클릭 시 테두리 색 */
  }

  &.selected::before {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    background-color: #FFCE4F; /* 클릭 시 내부 원 색 */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const bigText = styled.p`
    margin: 10px;
    color: #FFCE4F;
    font-family: 'chab';
    font-size: 30px;
  `;

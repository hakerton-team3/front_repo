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
  height: 40vh;
  background-color: #FFCE4F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Title style
export const Title = styled.div`
  font-family: 'chab';
  font-size: 24px;
  margin-bottom: 20px;
`;

// Card container style with horizontal scroll
export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  width: 150%;
  
`;

// Individual card style
export const Card = styled.div`
    width: 150%; /* 너비를 100%로 설정 */
  max-width: 100%; /* 최대 너비를 500px로 설정 */
  height: 100%px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex; /* flex를 사용하여 내부 콘텐츠 정렬 */
  flex-direction: column; /* 수직 정렬 */
  align-items: start; /* 왼쪽 정렬 */
  justify-content: center; /* 중앙 정렬 */
  position: relative;
 
   
`;

// Card text style
export const CardText = styled.div`
  font-family: 'chab';
  font-size: 24px;
  text-align: center;
`;

// Hole style
export const Hole = styled.div`
  width: 20px;
  height: 20px;
  background-color: #FFCE4F;
  border: 2px white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
`;
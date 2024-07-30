import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

// Global style to include the custom font
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;
export const Divider = styled.div`
  width: 100%; /* 구분선의 너비 */
  height: 1px; /* 구분선의 높이 */
  background-color: gray; /* 구분선 색상 */
  
`;

export const BubbleContainer = styled.div`
  position: relative;
  background: #FFCE4F;
  border-radius: 1.0em;
  padding: 3% 3%;
  color: black;
  margin: 5%;
  font-size: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px; /* 수정: 부모 요소 외부에 배치 */
    left: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #FFCE4F;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
  }
`;

export const BubbleText = styled.p`
  margin: 0;
  padding: 0;
`;

export const StyledContainer = styled.div`
  width: 115px;
  height: 33px;
  background-color: white;
  border: 1px solid #FFCE4F;
  border-radius: 20px;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  color: black; /* 텍스트 색상 */
  font-weight: bold; /* 텍스트 굵게 */
  margin-left: 65%;
  margin-bottom: 5%;
`;
export const MainContainer = styled.div`
  width: 100%; /* 전체 너비 사용 */
  height: 100%;
  display: flex;
  flex-direction: row; /* 세로 정렬 */
  align-items: flex-start;
  gap: 10px; /* 각 컨테이너 간의 간격 */
  margin-top:5%;
  margin-left:5%;
   
  
`;

export const SmallContainer = styled.div`
  width: 60px;
  height: 44px;
  background-color: white;
  border: 1px solid #FFCE4F;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px; /* 필요시 추가 */
`;

export const DeleteText = styled.div`
  color: black;
  font-size: 18.25px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
`;

export const ContactContainer = styled.div`
  width: 50%;
  height: 43.06px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFCE4F;
  border-radius: 14.60px;
  padding: 0 10px;
  margin-bottom: 7px; /* 필요시 추가 */
`;

export const ContactText = styled.div`
  color: black;
  font-size: 18.25px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
`;

export const OvalContainer = styled.div`
  width: 40.15px;
  height: 40.15px;
  background-color: white;
  border: 2.56px solid #FFCE4F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px; /* 필요시 추가 */
`;

export const InnerOval = styled.div`
  width: 29.05px;
  height: 29.05px;
  background-color: #FFCE4F;
  border-radius: 50%;
`;
// Section01.styled.js
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

// Styled component using the custom font
export const FontChab = styled.span`
  font-family: 'chab';
  font-weight: bold;
  font-size: 50px;
`;

// Main container style with transparent background and gradient
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),
    url('src/images/image2.png');
  background-size: cover;
  background-position: center;
  overflow-x: hidden; /* Prevent horizontal scrolling */
    overflow-y: hidden;
`;
 
// Title style
export const Title = styled.h2`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 텍스트와 아이콘을 양쪽 끝으로 정렬 */
  width: 100%; /* 부모 요소의 전체 너비 사용 */
  margin: 0; /* 여백 초기화 */
  padding: 0; /* 패딩 초기화 */
`;

// White container style
export const WhiteContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const WhiteSubContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  padding: 5%;
  margin: 5%;
`;

// Icon wrapper style
export const IconWrapper = styled.div`
  display: flex;
  align-items: center; /* 아이콘을 중앙에 정렬 */
`;

// New styles for Section01
export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  font-size: 13px;
  color: black;
`;

export const LargeText = styled.div`
  font-size: 25px;
  color: black;
`;

export const Smalltitle = styled.div`
  font-size: 13px;
  color: black;
  text-align: center;
  width: 100%; /* 부모 요소의 전체 너비 사용 */
`;

export const YellowContainer = styled.div`
  background-color: #FFCE4F; /* 노란색 배경 */
  width: 80%;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* 가운데 정렬 */
  margin-bottom: 3%;
  color: black; 
  font-weight: bold;
`;

export const YellowContainer2 = styled.div`
  background-color: #FFCE4F; /* 노란색 배경 */
  width: 50%;
  height: 5%;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 10%;
  color: black; 
  font-weight: bold;
  display: flex;
  margin-top: 10%;
  align-items: center;
`;
 

export const Rowcustom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Smalltitle2 = styled.div`
  font-size: 13px;
  color: gray;
  text-align: center;
  width: 100%; /* 부모 요소의 전체 너비 사용 */
`;

export const CustomLinkContainer = styled(Link)`
  width: 340px;
  height: 60px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); /* 고쳐짐: 0.25로 수정 */
  border-radius: 20px;
  margin-top: 10%;
  margin-left: 10%;
  margin-bottom: 3%;
  display: flex; /* 추가 */
  align-items: center; /* 추가 */
  justify-content: center; /* 추가 */
  text-decoration: none; /* 링크 스타일 제거 */
  color: inherit; /* 텍스트 색상 상속 */
`;

export const YellowBox = styled.div`
  margin-top: 50%;
  width: 444px;
  height: 289px;
  background: #FFCE4F;
`;


export const TransparentContainer = styled.div`
  width: 50%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.5); /* 투명 배경 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  border-radius: 55px; /* 모서리를 더 둥글게 */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  box-shadow: 0 12px 8px rgba(0, 0, 0, 0.1);
  margin: 10% 0 0 5%; /* 상단에 10%의 마진을 추가, 왼쪽에 5% 마진 */
  position: relative; /* 이미지 위치를 조정하기 위해 추가 */
  overflow: visible; /* 컨테이너 밖의 요소를 보이도록 설정 */
`;

// Image style
export const Image = styled.img`
  width: 100%; /* 이미지의 크기를 조정 */
  height: auto;
  position: absolute; /* 절대 위치 */
  right: -40%; /* 부모 컨테이너의 오른쪽 밖으로 나가도록 설정 */
  bottom: -50%; /* 부모 컨테이너의 아래쪽 밖으로 나가도록 설정 */
`;

export const Button = styled.button`
 width: 340px;
  height: 60px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); /* 고쳐짐: 0.25로 수정 */
  border-radius: 20px;
  margin-top: -17.9%;
  margin-left: 10%;
  margin-bottom: 3%;
  display: flex; /* 추가 */
  align-items: center; /* 추가 */
  justify-content: center; /* 추가 */
  text-decoration: none; /* 링크 스타일 제거 */
  color: inherit; /* 텍스트 색상 상속 */

  &:hover {
    background-color: #e0a800; /* 호버 시 배경색 */
  }
`;
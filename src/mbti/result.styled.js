import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 20%;
  margin-left: 20%;
`;

export const Image = styled.img`
  width: 100%; /* 이미지의 크기를 조정 */
  height: auto;
  
`;

export const Maintext = styled.h1`
  font-family: 'chab';
  font-size: 40px;
  font-weight: bold;
  color: #FFCE4F;
  text-align: center; /* 텍스트 가운데 정렬 */
   width: 100%;
`;

export const Graycontainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
  width: 100%;
  height: 50vh;
  background-color: #f8f9fa;
  padding: 20px;
  box-sizing: border-box;
`;

// F8F8F8
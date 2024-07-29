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

// Styled component using the custom font
export const FontChab = styled.span`
  font-family: 'chab';
  font-weight: bold;
  font-size: 50px;
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex; /* 버튼들을 가로로 배치 */
  justify-content: space-around; /* 버튼 간 간격 동일 분배 */
  width: 100%; /* 버튼 컨테이너 너비 */
`
export const ImageButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  width: 170px;

  img {
    width: 100%; 
  }
`;


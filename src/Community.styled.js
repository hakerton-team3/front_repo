import styled, { createGlobalStyle } from 'styled-components';

// Global style to include the custom font
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  overflow-x: hidden; 
  overflow-y: hidden; 

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

export const BestContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const Best = styled.div`
  display: flex;
`;

export const Heart = styled.img`
  margin-left: 5px;
  flex-direction: row;
  width: 20px;
  height: 20px;
`;

export const BestSection = styled.div`
  position: relative;
  left: 0;
  right: 0;
  height: 240px;
  background-color: #FFCE4F;
  margin-top: 10px;
  box-sizing: border-box;
  white-space: nowrap; /* Prevent text from wrapping */

`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth;
  white-space: nowrap; /* Prevent text from wrapping */
  
  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;


export const ItemContainer = styled.div`
  display: inline-block;
  width: 270px;
  height:215px;
  margin: 0 10px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &.active {
    transform: scale(1.1);
  }
  
  &.inactive {
    transform: scale(1);
  }
`;

export const ItemBackground = styled.div`
  width: 250px;
  height: 180px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px; 
`;

export const Content = styled.div`
  font-size: 16px;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;

export const KeywordContainer = styled.div`
  text-align: left;
  position: relative; /* 아이콘을 입력창의 절대 위치에 배치하기 위해 설정 */
`;

export const Keyword = styled.div`
  display: flex;
  align-items: center; /* 아이콘과 제목을 수직으로 가운데 정렬 */
  position: relative; /* 입력창과 아이콘의 상대적 위치를 설정하기 위해 */
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 20px;
  font-weight: bold;
  color: #FFCE4F;
  margin: 0;
   display: flex;
  align-items: center; /* 제목과 아이콘을 수직으로 가운데 정렬 */
`;

export const Search = styled.img`
  margin-left: 5px;
  flex-direction: row;
  width: 20px;
  height: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 250px;
  width: 100%;
`

export const StyledInput = styled.input`
  padding: 10px;
  padding-right: 40px; /* 아이콘 크기에 따라 여유 공간 추가 */
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  width: 100%;
  height: 20px;
  background-image: linear-gradient(90deg, #FFCE4F, #FF9900);
  width: 250px;
  overflow: auto; /* 검색어가 길어졌을때 오른쪽으로 자연스럽게 검색되도록 하기 위해 */
  position: relative; /* 아이콘을 절대 위치로 배치하기 위해 설정 */
  &::placeholder {
    color: #FFFFFF; 
    padding-right: 30px; /* 아이콘 크기에 따라 여유 공간 추가 */
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 100px; /* 입력창의 왼쪽 끝과 아이콘 사이의 여유 공간 */
  top: 30%;
  transform: translateY(-50%); /* 세로 중앙에 위치시키기 위해 */
  width: 20px; 
  height: 20px; 
`;

export const WriteIcon = styled.img`
  flex-direction: row;
  margin-top: 5px;
  margin-left: 20px;
  width: 50px; 
  height: 50px; 
`;

export const Try = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
  font-size: 10px;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column; /* 자식 요소들을 세로로 배치 */
`
export const Text = styled.div`
  flex-direction: column;
  text-align: left;
  line-height: 3px;
`
export const Box = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: left; /* 버튼들을 중앙에 정렬 */
`
export const TagGroup = styled.div`
  display: flex;
  gap: 10px;
`

export const Tag = styled.div`
  padding: 3px 8px;
  border: none;
  border-radius: 5px;
  background-color: #FFCE4F;
  cursor: pointer;
  font-size: 10px;
  color: #000;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  position: relative; /* 추가: 닫기 버튼의 절대 위치를 기준으로 설정 */
  background: #F8F8F8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

export const P = styled.div`
  text-align: left;
  margin-left: 20px;
`

export const MemoBox = styled.textarea`
  width: 250px;
  height: 120px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  resize: none; /* 크기 조절 불가 */
`;

export const SubmitButton = styled.button`
  width: 270px;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #FFCE4F;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;




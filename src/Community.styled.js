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
  display: flex;
  width: 100%;
  margin-top: 4px;
  margin-left: 25px;
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
    transform: scale(1);
  }
  
  &.inactive {
    transform: scale(0.8);
  }
`;

export const ItemBackground = styled.div`
  width: 230px;
  height: 200px;
  margin-top: 10px;
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
  margin-top: 0px;
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
  background: linear-gradient(90deg, #FFCE4F, #FF9900);
  border-radius: 15px; 
  padding: 5px 10px; /* 내부 여백 */
  width: 300px; 
  height: 37px;
  margin-top: 5px;
`

export const StyledInput = styled.input`
 -webkit-background-clip: text;
  border: none; /* 기본 테두리 제거 */
  font-size: 12px; 
  font-weight: bold;
  padding: 10px 40px 10px 10px; /* 여백 설정 */

  padding-right: 70px; /* 아이콘 크기에 따라 여유 공간 추가 */
  border: none;
  border-radius: 10px;
  font-size: 12px;
  width: 100%;
  height: 20px;
  width: 400px;
  overflow: auto; /* 검색어가 길어졌을때 오른쪽으로 자연스럽게 검색되도록 하기 위해 */
  position: relative; /* 아이콘을 절대 위치로 배치하기 위해 설정 */
  &::placeholder {
    color: white; 
  }
`;

export const SearchIcon = styled.img`
 width: 35px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 15px; 
  margin-top: 0px;
  cursor: pointer; /* 마우스 커서 변경 */
`;

export const WriteIcon = styled.img`
  flex-direction: row;
  margin-top: -7px;
  margin-left: 35px;
  width: 50px; 
  height: 50px; 
`;

export const Try = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
  font-size: 10px;
`

export const PostListContainer = styled.div`
display: flex;
flex-direction: column;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column; /* 자식 요소들을 세로로 배치 */
`
export const Text = styled.div`
  flex-direction: column;
  text-align: left;
  line-height: 3px;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  - display: -webkit-box !important; /* Flexbox 사용 */ 
  -webkit-line-clamp: 1 !important; /* 한 줄로 제한 */
  -webkit-box-orient: vertical !important; /* 세로 방향 설정 */
  word-break: keep-all !important;
`

export const Text2 = styled.div`
  flex-direction: column;
  text-align: left;
  line-height: 10px;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  - display: -webkit-box !important; /* Flexbox 사용 */ 
  -webkit-line-clamp: 1 !important; /* 한 줄로 제한 */
  -webkit-box-orient: vertical !important; /* 세로 방향 설정 */
  word-break: keep-all !important;
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
  flex-wrap: wrap;  /* 태그들이 가로로 나열되고 넘치면 줄바꿈되도록 설정 */
`;

export const Tag = styled.div`
  padding: 3px 8px;
  border: none;
  border-radius: 5px;
  background-color: #FFCE4F;
  cursor: pointer;
  font-size: 10px;
  color: #000;
`
export const TagUnderline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E7E7E7;
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

export const ModalTitle = styled.div`
  font-family: 'chab';
  font-weight: bold;
  font-size: 38px;
  color: #FFCE4F;
  margin-bottom: 10px;
`

export const P = styled.div`
  text-align: left;
  margin-left: 25px;
  font-size: 10px;
`

export const TitleBox = styled.input`
  margin-top: 10px;
  margin-left: 15px;
  padding: 10px;
  font-weight: bold;
  display: block;
  border: none;
  background: #F8F8F8;
  font-size: 14px;
`;

export const Underline = styled.div`
  margin-left: 25px;
  width: 80%;
  height: 1px;
  background-color: #E7E7E7;
`;

export const MemoBox = styled.textarea`
  width: 250px;
  height: 120px;
  border: none;
  background: #F8F8F8;
  padding: 10px;
  resize: none; /* 크기 조절 불가 */
`;

export const ModalBottom = styled.div`
  display: flex;
  flex-direction: row;
`
export const TagBox = styled.textarea`
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 5px;
  width: 160px;
  height: 28px;
  font-size: 8px;
  color: black;
  background-color: white
  border: none;
  display: block;
`

export const SubmitButton = styled.button`
  width: 80px;
  height: 44px;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: #E7E7E7;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 10px;
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

// Entire Post Modal Styles

export const EntireModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 배경을 반투명하게 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const EntireModalContent = styled.div`
  background: #F8F8F8;
  width: 40%;
  max-width: 800px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;



export const EntireTitleBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  display: block;
  border: none;
  background: #F8F8F8;
  font-size: 14px;
`;


export const ModalUnderline = styled.div`
  margin-left: 10px;
  width: 90%;
  height: 1px;
  background-color: #E7E7E7;
`;

export const EntireMemoBox = styled.div`
  width: 100%;
  margin-left: 0px;
  max-width: 100%;
  height: 120px;
  border: none;
  background: #F8F8F8;
  padding: 10px;
  resize: none; /* 크기 조절 불가 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 가능 */
  text-align: left;
`;

export const EntireModalBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  gap: 10px;
  align-items: center; /* 추가: 세로 정렬을 가운데로 설정 */
`;

export const EntireTagGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;  /* 태그들이 가로로 나열되고 넘치면 줄바꿈되도록 설정 */
`;

export const EntireTag = styled.div`
  padding: 3px 8px;
  border: none;
  border-radius: 5px;
  background-color: #FFCE4F;
  cursor: pointer;
  font-size: 10px;
  color: #000;
`;

export const LikeButton = styled.button`
  padding: 3px 8px;
  border: none;
  border-radius: 5px;
  background-color: #FFCE4F;
  cursor: pointer;
  font-size: 10px;
  color: #000;
  margin-left: auto; /* 오른쪽으로 밀어내기 위해 추가 */
`
export const HeartButton = styled.img`
  height: 15px;
  width: 15px;
  margin-top:2px;
`

export const EntireCloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`


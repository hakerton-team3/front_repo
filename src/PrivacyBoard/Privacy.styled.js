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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 21px;
  margin-left: 6%;
`;

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

export const CommunityContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: none;

  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */
  
  /* Webkit 기반 브라우저에서 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* 필요한 다른 스타일 추가 */
  width: 100%;
  height: 100%;
  overflow: auto; /* 스크롤이 필요한 경우만 표시 */
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),
  url('../../../src/image/delicious-candy-arrangement.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 80px;
`;

export const ForegroundImage = styled.div`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: url('../../../src/image/주다리리.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 80px;
`;

export const Content = styled.div`
  margin-top: 45%;
  position: absolute;
  text-align: center;
  font-size: 9px;
  color: black;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 85px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
`;

export const MainText = styled.div`
  margin-top: 80%;
  position: absolute;
  left: 7%;
  font-family: 'chab', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #FFCE4F;
  display: flex;
  position: relative; /* 아이콘을 입력창의 절대 위치에 배치하기 위해 설정 */
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 20px;
  font-weight: bold;
  color: #FFCE4F;
  margin-top: 10px;
  display: flex;
  align-items: center; /* 제목과 아이콘을 수직으로 가운데 정렬 */
`;

export const SearchImg = styled.img`
  margin-left: 5px;
  margin-top: 10px;
  flex-direction: row;
  width: 20px;
  height: 20px;
`;

export const Search = styled.div`
    display: flex;
    width: 100%; 
    flex-direction: row;

`;

export const SearchContainer = styled.div`
  display: flex; 
  background: linear-gradient(90deg, #FFCE4F, #FF9900);
  border-radius: 15px; 
  padding: 5px 10px; /* 내부 여백 */
  width: 250px; 
  height: 37px;
  margin-left: 20px;

`;

export const SearchInput = styled.input`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none; /* 기본 테두리 제거 */
  font-size: 12px; 
  font-weight: bold;
  padding: 10px 40px 10px 10px; /* 여백 설정 */
 
`;

export const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 3px; 
  margin-top: 0px;
  cursor: pointer; /* 마우스 커서 변경 */
`;

export const WriteIcon = styled.img`
  flex-direction: row;
  margin-top: 0px;
  margin-left: 15px;
  width: 50px; 
  height: 50px; 
`;

export const Underline = styled.div`
  width: 90%;
  height: 1px;
  background-color: #E7E7E7;
  margin: 20px auto 0 auto;
`;

export const MemoContainer = styled.div`
  height: 300px;
  overflow-y: scroll !important;
  padding-right: 10px;
`;

export const BorderedText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 20px;
  padding: 8px 40px 10px 20px;
  font-size: 17px;
  color: #000000;
  font-weight: bold;
  height: 60px;
  width: 300px;
  background-color: #FFFFFF;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 25px;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const SmallText = styled.span`
  font-size: 9px;
  font-weight: normal;
  color: #787878;
  position: absolute;
  right: 50px;
  top: 23%;
  transform: translateY(-50%);
`;

export const CloseImg = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;


// 모달 오버레이
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

// 모달 콘텐츠
export const ModalContent = styled.div`
  position: relative;
  background: #F8F8F8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

// 모달 제목
export const P = styled.div`
  text-align: left;
  margin-left: 20px;
`;

// 메모 입력창
export const MemoBox = styled.textarea`
  width: 250px;
  height: 120px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  resize: none; /* 크기 조절 불가 */
`;

// 등록 버튼
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

// 닫기 버튼
export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

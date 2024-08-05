import styled from 'styled-components';

 

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  flex-direction: column;
  align-items: center;
   overflow-x: hidden;
`;

export const Title = styled.h1`
  font-family: 'LotteriaChab';
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 20%;
  margin-right: 40%;
`; 

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Bubble = styled.div`
  background-color: #FFCE4F;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  width: 80%;
  text-align: center;
`;

export const Image = styled.img`
  width: 50%; /* 이미지의 크기를 조정 */
  height: auto;
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%),
    url('src/images/image2.png');
  background-size: cover;
  background-position: bottom; /* Adjusted to position the image at the bottom */
  display: flex;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-family: 'LotteriaChab';
  font-size: 100px;
  color: white;
  text-align: center;
  margin-top: 20px;
  max-width: 300px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 10px;
  height: 8%;
  background-color: #FFCE4F;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
`;

export const Link = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 10px;
  height: 8%;
  background-color: #FFCE4F;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 10%;
`;

export const Instruction4 = styled.h3`
   
  color: #444;
  font-size: 20px;
   
      margin-left: 10px;  
  font-weight: bold;
  
`;
export const Instruction5 = styled.h3`
    margin-right: 10px;  
  color: #444;
  font-size: 20px;
   
  
  font-weight: bold;
  
`;

export const InputWrapper = styled.div`
  width: 200px;
  margin: 0 auto 20px;
  border-bottom: 2px solid #000;
`;

export const InputLine = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  text-align: center;
  bottom: 0;
  background: transparent;
  color: black; /* 텍스트 색상 */
  caret-color: black; /* 커서 색상 */
  font-family: inherit;
  &::placeholder {
    color: transparent;
  }
`;

export const InputText = styled.span`
  display: block;
  width: 100%;
  font-size: 18px;
  text-align: center;
  bottom: 5px;
  left: 0;
  pointer-events: none;
  color: black;
  font-family: inherit;
  transition: color 0.2s;
`;

export const MainText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  
`;

export const Highlight = styled.span`
  color: #FFCE4F; // 노란색
  font-family: 'LotteriaChab';
`;

export const SubHighlight = styled.span`
  color: #FFCE4F;
  font-family: 'LotteriaChab';
`;

export const BubbleContainer = styled.span`
  position: relative;
  background: #FFCE4F;
  border-radius: 1.0em;
  padding: 3% 3%; /* 필요에 따라 패딩을 조정하세요 */
  color: black;
  margin-left: 10%;
  font-size: 10px;
  width: 60%;
  margin-right: 25%;
  margin-bottom: 10%;
  height: 60px; /* 원하는 높이로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 자식 요소를 수직 중앙 정렬 */
  align-items: flex-start; /* 자식 요소를 왼쪽 정렬 */
`;

export const BubbleContainerText = styled.span` // 수정: text를 span으로 변경
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

export const BubbleContainerText2 = styled.span` // 수정: text를 span으로 변경
  font-size: 13px;
  color: black;
  text-align: start;
`;

export const BubbleContainer2 = styled.span`
  position: relative;
  background: ${(props) => (props.selected ? '#FFCE4F' : '#FFF')};
  border-radius: 1.0em;
  padding: 3% 3%; /* 필요에 따라 패딩을 조정하세요 */
  color: ${(props) => (props.selected ? '#000' : '#000')};
  margin-left: 10%;
  font-size: 10px;
  width: 60%;
  margin-right: 25%;
  height: 60px; /* 원하는 높이로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 자식 요소를 수직 중앙 정렬 */
  align-items: flex-start; /* 자식 요소를 왼쪽 정렬 */
`;

export const Divider = styled.div`
  width: 80%; /* 구분선의 너비 */
  height: 1px; /* 구분선의 높이 */
  background-color: black; /* 구분선 색상 */
  margin: 15% auto; /* 구분선을 수평 중앙으로 정렬 */
`;

export const Container3 = styled.div`
  width: 350px;
  height: 190px;
  display: flex;
  justify-content: center; /* 자식 요소를 수평 중앙 정렬 */
  align-items: center; /* 자식 요소를 수직 중앙 정렬 */
  flex-direction: column; /* 컬럼 방향으로 정렬 */
  margin: -10% auto; /* 구분선을 수평 중앙으로 정렬 */
`;

  


export const BubbleContainer3 = styled.button`
  position: relative;
  background: ${(props) => (props.selected ? '#FFF509' : '#FFCE4F')}; // 선택되었을 때 배경색 변경
  border-radius: 3.0em;
  padding: 3% 3%; /* 필요에 따라 패딩을 조정하세요 */
  color: black;
  font-size: 10px;
  width: 90%;
  height: 50px; /* 원하는 높이로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 자식 요소를 수직 중앙 정렬 */
  margin-top: 5%;
`;

export const BubbleContainerText3 = styled.span`
  font-size: 13px;
  color: ${(props) => (props.selected ? 'white' : 'black')}; // 선택되었을 때 글자색 변경
  font-weight: bold;
  text-align: center;
`;
export const ParentContainer = styled.div`
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

export const Instruction2 = styled.div`
font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const NumberContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0c040;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  height: 40px;
  width: 100px;
`;

export const NumberButton = styled.button`
 background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
   
  &:hover {
    color: #555;
  }
`;

export const NumberDisplay = styled.div`
  background-color: white;
  padding: 0px 5px;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
`;

export const ParentContainer2 = styled.div`
display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;
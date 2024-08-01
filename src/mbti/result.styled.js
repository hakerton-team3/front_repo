import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;

  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h1`
  font-family: 'chab';
  font-size: 60px;
  font-weight: bold;
  text-align: start;
  color: black;
  margin-top: 20%;
  margin-left: 10%;
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
   border-radius: 10%; 
  width: 30%;
  height: 200px;
  background-color: #F8F8F8;
 align-items: center;
  box-sizing: border-box;
  margin-left:2%;
   flex-direction: column;
    position: relative;
`;


export const ContainerImage = styled.img`
  width: 70%; /* 이미지의 크기를 조정 */
  height: 70px;
  margin-top: 30%;
 
  
`;
export const WarningImage = styled.img`
  width: 100%; /* 이미지의 크기를 조정 */
  height: auto;
  margin-top: 10px; /* 원하는 위치에 따라 조정 */
`;

export const WarningText = styled.p`
  white-space: pre-line;
  font-size: 12px;
  font-weight: normal;
  color: black;
  text-align: center;
 
`;



export const BubbleContainer = styled.div`
  position: relative;
  background: #FFCE4F;
  border-radius: 1.0em;
  padding: 3% 3%;
  color: black;
  margin: 5%;
  font-size:10px;
  width: 40%;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #FFCE4F;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

export const BubbleContainertext = styled.span`
font-size: 12px;
  font-weight: bold;
    color: black;
    text-align: center;
`;

export const CheckCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10%;
  
   border: 2px solid #FFCE4F; /* 테두리 색상과 두께 설정 */

  &::after {
    content: '\\2713'; /* 체크 표시 유니코드 */
    font-size: 30px;
    color: #FFCE4F;
    position: absolute;
  }
`;


export const RowContainer = styled.div`
  flex-direction: row;
  display: flex;
`;


export const BubbleContainer2 = styled.div`
  position: relative;
  background: #E3E3E3;
  border-radius: 1.0em;
  padding: 3% 3%;
  color: black;
 
  font-size:10px;
  width: 30%;
  margin: 15% 5% 5% auto;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #E3E3E3;
    border-bottom: 0;
    border-right: 0; /* 말꼬리를 오른쪽으로 변경 */
    margin-left: 40%; /* 오른쪽 여백 조정 */
    margin-bottom: -20px; /* 아래 여백 조정 */
  }
`;


export const Button = styled.button`
  width: 60%;
  height: 50px;
  padding: 10px;
  background-color: #FFCE4F;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 10% 0;
  font-color: black;
 
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;


export const FooterText = styled.p`
  font-size: 14px;
  color: black;
  text-align: center;
  
`;
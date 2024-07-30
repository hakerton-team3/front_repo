import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const ContentContainer = styled.div`
  width: 70%;
  max-width: 400px;
 
  background-color: white;
  padding: 20px;
  text-align: center;
  box-sizing: border-box; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1); /* 고쳐짐: 0.25로 수정 */
  border-radius: 20px;
  position: relative; /* relative로 설정하여 자식 요소의 absolute 위치를 기준으로 함 */
 
  margin: 20% auto 40px auto;
opacity: 0.2; /* 투명도 조절 */
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative; /* relative로 설정하여 투명도 조절 */
  z-index: 2; /* z-index로 이미지 위에 오도록 설정 */
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  line-height: 1.5;
  white-space: pre-wrap;
  position: relative; /* relative로 설정하여 투명도 조절 */
  z-index: 2; /* z-index로 이미지 위에 오도록 설정 */
`;

export const EmphasizedText = styled.span`
  font-weight: bold;
  position: relative; /* relative로 설정하여 투명도 조절 */
  z-index: 2; /* z-index로 이미지 위에 오도록 설정 */
`;

export const Button = styled.div`
  background-color: #FFCE4F;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
 
  cursor: pointer;
  color: black;
  width: 60%;
  margin: 0 auto;
  
  position: relative; /* relative로 설정하여 투명도 조절 */
  z-index: 2; /* z-index로 이미지 위에 오도록 설정 */
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
 
  
 
`;

export const OverlayImage = styled.img`
  width: 150px; /* 크기 조절 */
  height: auto;
  position: absolute;
  bottom: 50%; /* 위치 조절 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙으로 정렬 */
  z-index: 1; /* z-index로 다른 요소 뒤에 오도록 설정 */
  pointer-events: none; /* 클릭 방지 */
 
`;

export const ContentContainer2 = styled.div`
  width: 70%;
  max-width: 400px;
  background-color: transparent;
  padding: 0x;
  text-align: center;
  border-radius: 20px;
  position: relative;  
  z-index: 2;
  margin: -45% auto 0 auto;
   
`;

export const SubTitle2 = styled.h2`
  font-size: 60px;
  font-weight: bold;
  font-family: 'chab';
  src: url('src/fonts/chab.ttf') format('truetype');
  color: #EF4444;
  position: relative;
  top: -60px; /* 원하는 만큼 위로 이동 */
`;
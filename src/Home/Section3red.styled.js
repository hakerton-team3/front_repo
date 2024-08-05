import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: relative; /* 자식 요소의 절대 위치를 기준으로 함 */
  z-index: 0; /* 다른 팝업보다 뒤에 위치하도록 설정 */
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
  position: relative; /* 자식 요소의 absolute 위치를 기준으로 함 */
  margin: 20% auto 40px auto;
  opacity: 0.2; /* 투명도 조절 */
  z-index: 1; /* 다른 요소보다 뒤에 위치 */
`;

export const ContentContainer2 = styled.div`
  // 추가 스타일 정의
`;

export const Image2 = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../image/운영중단.svg') center center / cover no-repeat;
  z-index: 10;
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
  width: 230px; /* 크기 조절 */
  height: auto;
  position: absolute;
  top: 50%; /* 위치 조절 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙으로 정렬 */
  z-index: 1; 
  pointer-events: none; /* 클릭 방지 */
`;

export const SubTitle2 = styled.h2`
  font-size: 60px;
  font-weight: bold;
  font-family: 'chab';
  src: url('src/fonts/chab.ttf') format('truetype');
  color: #EF4444;
  position: relative;
  top: -60px; /* 원하는 만큼 위로 이동 */
  z-index: 3; /* z-index로 OverlayImage 위에 오도록 설정 */
`;

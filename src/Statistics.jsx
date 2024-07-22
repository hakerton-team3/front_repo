import React from 'react';
import styled from 'styled-components';
import memoIcone from './image/메모장.png';
import starIcone from './image/별점.png';
import rectangleImg from './image/Rectangle.png';

const Container = styled.div`
  overflow-x: hidden; /* 가로 스크롤을 숨기기 위해 추가 */
  overflow-y: auto; /* 세로 스크롤은 필요에 따라 표시 */
  padding-bottom: 20px; /* 아래쪽 패딩 추가 */
  max-width: 100vw; /* 화면 너비를 넘지 않도록 설정 */
  box-sizing: border-box; /* 패딩을 포함한 전체 크기를 계산 */
`;

const Maintext = styled.div`
  color: #000;
  margin-top: -80px;
  margin-left: 30px;
  font-size: 36px;
  p {
    margin: 0; /* p 태그의 기본 margin 제거 */
  }

  p:nth-child(2) {
    font-weight: bold; /* 두 번째 p 태그 글씨를 두껍게 */
    margin-top: -6px; /* 두 글씨 사이의 거리 조절 */
  }
`;

const MemoImage = styled.img`
  width: 240px;
  height: 200px;
  margin-left: 200px;
  margin-top: 30px;
`;

const Underline = styled.div`
  width: 80%;
  height: 0.2px;
  background-color: #E7E7E7;
  margin: 10px auto 0 auto; 
`;

const StarImage = styled.img`
  width: 240px;
  height: 38px;
  margin-left: 95px;
  margin-top: 30px;
`;

const Weektext = styled.div`
  color: #000;
  margin-top: -200px; /* 조정된 margin-top 값 */
  margin-left: 30px;
  position: relative;
  z-index: 1; /* 텍스트가 이미지 위에 위치하도록 설정 */
  
  p {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  h1 {
    font-size: 44.48px;
    font-weight: bold; 
    margin: 0;
    color: #FFCE4F;
  }
`;

const RectContainer = styled.div`
  position: relative;
  width: 240px;
  height: 200px;
  margin-left: 200px; 
  margin-top: 30px;
`;

const RectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ffffff, #FFCE4F);
  pointer-events: none; /* 이 요소가 클릭 이벤트를 차단하지 않도록 함 */
`;

const TextContainer =styled.div`
  margin-top: 90px;
  color: #000;
  font-weight: bold;
  
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
`;

const BorderedText = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  border-radius: 16px; /* 둥근 모서리 */
  padding: 10px; /* 텍스트와 테두리 사이의 여백 */
  font-size: 17px; /* 텍스트 크기 */
  color: #000000; /* 텍스트 색상 */
  height: 30px;
  width: 300px;
  background-color: #FFCE4F; /* 배경 색상 (선택 사항) */
  margin-bottom: 30px;
  margin-left: 50px;
`;

const BorderedTextRed = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  border-radius: 16px; /* 둥근 모서리 */
  padding: 10px; /* 텍스트와 테두리 사이의 여백 */
  font-size: 17px; /* 텍스트 크기 */
  color: #FFFFFF; /* 텍스트 색상 */
  height: 30px;
  width: 300px;
  background-color: #FF4F4F; /* 배경 색상 (선택 사항) */
  margin-bottom: 30px;
  margin-left: 50px;
`;

const ModalContent = styled.div`
  font-size: 11px;
  color: #000000;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
`;

const ModalContent2 = styled.div`
  font-size: 15px;
  color: #000000;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const ModalContent3 = styled.div`
  font-size: 13px;
  color: #000000;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;

const RetestButton = styled.button`
  background-color: #FFCE4F;
  color: #000;
  width: 355px;
  height: 60px;
  font-size: 16px; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  margin-left: 30px;
  margin-bottom: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  
  &:hover {
    background-color: #ffd710;
  }
`;

function Statistics() {
  return (
    <> <Container>
      <MemoImage src={memoIcone} />
      <Maintext>
        <p>김서경 님의</p>
        <p>건강진단표,</p>
      </Maintext>
      <Underline />
      <StarImage src={starIcone} />
      <RectContainer>
        <RectImage src={rectangleImg} />
        <GradientOverlay />
      </RectContainer>
      <Weektext>
        <p>이번 주, 총</p>
        <h1>8병의 맥주,</h1>
        <h1>2병의 소주</h1>
      </Weektext>
      <TextContainer>
      <p>김서경 님의 기본 주량을 넘긴 날은,</p>
      <BorderedText>8월 2일, 친구들과 일본여행</BorderedText>
      <p>이번 주 금주의 날은,</p>
      <BorderedTextRed>"없었습니다."</BorderedTextRed>
      <p>JRMT 주량마스터의 기본설정과 비교해,</p>
      <BorderedText>절주가 필요한 상황입니다.</BorderedText>
      <p>음주 예정일은, 일주일 평균</p>
      <BorderedText>3일입니다.</BorderedText>
      </TextContainer>
      <ModalContent>일주일 평균 음주 예정일이 3일 이상일 경우, 절주챌린지를 추천합니다.</ModalContent>
      <Underline />
      </Container>
      <ModalContent2>종합 코멘트</ModalContent2>
      <ModalContent3>주량마스터답게 술자리의 음주 문화를 즐기시는 모습입니다. 하지만 건강한 음주 생활과는 거리가 먼 태도라는 점을 인지하고 계셔야 합니다.</ModalContent3>
      <Underline />
      <RetestButton>술MBTI가 변한 것 같다면?</RetestButton>
    </>
  );
}

export default Statistics;

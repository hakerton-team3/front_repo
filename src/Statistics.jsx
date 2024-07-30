import React from 'react';
import memoIcone from './image/메모장.png';
import starIcone from './image/별점.png';
import calenderIcone from './image/달력이미지.png';
import pencilIcone from './image/연필3d.png';
import handIcone from './image/손.png';
import styled, { createGlobalStyle } from 'styled-components';

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
  z-index: 3; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
  p {
    margin-left:-190px; /* p 태그의 기본 margin 제거 */
  }

  p:nth-child(2) {
    font-weight: bold; /* 두 번째 p 태그 글씨를 두껍게 */
    margin-top: -50px; /* 두 글씨 사이의 거리 조절 */
  }
`;

const MemoImage = styled.img`
  width: 240px;
  height: 200px;
  margin-left: 200px;
  margin-top: 30px;
  z-index: 2; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const Underline = styled.div`
  width: 80%;
  height: 1px;
  background-color: #E7E7E7;
  margin: 10px auto 0 auto; 
  z-index: 2; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const Underline2 = styled.div`
  width: 80%;
  height: 1px;
  background-color: #E7E7E7;
  margin: -6px auto 0 auto; 
  z-index: 2; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const StarImage = styled.img`
  width: 240px;
  height: 38px;
  margin-left: 10px;
  margin-top: 30px;
  z-index: 2; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const Weektext = styled.div`
  color: #000;
  margin-top: -200px; /* 조정된 margin-top 값 */
  margin-left: -125px;
  position: relative;
  z-index: 3; /* 텍스트가 이미지 위에 위치하도록 설정 */
  
  p {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bold;
    margin-left: -150px;
  }

  h1 {
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-style: normal;
  }

  body {
    font-family: 'chab', sans-serif;
    color: #333; /* 기본 폰트 색상 */
  }
    font-family: 'chab';
    font-size: 44.48px;
    font-weight: bold; 
    margin: 4px;
    color: #FFCE4F;
  }
`;

const GradientContainer = styled.div`
  background: linear-gradient(to right, #ffffff, #FFCE4F);
  width: 240px;
  height: 200px;
  margin-left: 200px; 
  margin-top: 30px;
  z-index: 2; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const ShadowContainer = styled.div`
  width:350px;
  height: 400px;
  background-color: #FCFCFC;
  border-radius: 10px; // 모서리 둥글게
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 그림자 효과
  margin-top: 90px;
  margin-left: 8%;
  color: #000;
  font-weight: bold;
  padding: 5px;
  position: relative;
  z-index: 2; /* 설정 추가 */

  p {
    text-align: left; // p 태그를 왼쪽 정렬
    margin-bottom: 13px;
    margin-left: 20px;
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
  margin-top: -10px;
  margin-bottom: 15px;
  margin-left: 20px;
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
  margin-top: -10px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  border-radius: 8px; /* 둥근 모서리 */
  padding: 1px; /* 텍스트와 테두리 사이의 여백 */
  height: 30px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.8); 
  font-size: 11px;
  color: #000000;
  margin-top: -70px;
  margin-left: 20px;
  margin-bottom: 30px;
  z-index: 3; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const ModalContent2 = styled.div`
  font-size: 15px;
  color: #000000;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: bold;
  z-index: 3; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const ModalContent3 = styled.div`
  font-size: 13px;
  color: #000000;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 3; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const RetestButton = styled.button`
  background: linear-gradient(90deg, #FFCE4F, #FF9900);
  color: #000;
  width: 355px;
  height: 60px;
  font-size: 16px; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  margin-left: 35px;
  margin-bottom: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;    /* 수직 가운데 정렬 */
  
  &:hover {
    background-color: #ffd710;
  }
`;

const CalenderImage = styled.img`
  width: 311px;
  height: 250px;
  margin-left: 110px;
  margin-top: -90px;
  z-index: 1; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const PencilImage = styled.img`
  width: 120px;
  height: 150px;
  margin-left: 60%;
  margin-top: -40%;
  z-index: 1; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

const HandImage = styled.img`
  width: 311px;
  height: 250px;
  margin-left: -29%;
  margin-top: -60%;
  z-index: 2; /* 설정 추가 */
  position: relative; /* z-index를 적용하기 위해 추가 */
`;

function Statistics() {
  return (
    <>
      <Container>
        <MemoImage src={memoIcone} />
        <Maintext>
          <p>김서경 님의</p>
          <p>건강진단표,</p>
        </Maintext>
        <Underline />
        <StarImage src={starIcone} />
        <GradientContainer></GradientContainer>
        <Weektext>
          <p>이번 주, 총</p>
          <h1>8병의 맥주,</h1>
          <h1>2병의 소주</h1>
        </Weektext>
        
        <ShadowContainer>
          <p>김서경 님의 기본 주량을 넘긴 날은,</p>
          <BorderedText>8월 2일, 친구들과 일본여행</BorderedText>
          <p>이번 주 금주의 날은,</p>
          <BorderedTextRed>"없었습니다."</BorderedTextRed>
          <p>JRMT 주량마스터의 기본설정과 비교해,</p>
          <BorderedText>절주가 필요한 상황입니다.</BorderedText>
          <p>음주 예정일은, 일주일 평균</p>
          <BorderedText>3일입니다.</BorderedText>
        </ShadowContainer>

        <CalenderImage src={calenderIcone}></CalenderImage>
        <PencilImage src={pencilIcone}></PencilImage>
        <ModalContent>일주일 평균 음주 예정일이 3일 이상일 경우, 절주챌린지를 추천합니다.</ModalContent>
        <HandImage src={handIcone}></HandImage>
        <Underline2 />
        <ModalContent2>종합 코멘트</ModalContent2>
        <ModalContent3>주량마스터답게 술자리의 음주 문화를 즐기시는 모습입니다. 하지만 건강한 음주 생활과는 거리가 먼 태도라는 점을 인지하고 계셔야 합니다.</ModalContent3>
        <Underline />
        <RetestButton>술MBTI가 변한 것 같다면?</RetestButton>
      </Container>
    </>
  );
}

export default Statistics;

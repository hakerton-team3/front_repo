import React, { useState, useEffect } from 'react';
import memoIcone from './image/메모장.png';
import starIcone1 from './image/별점1.png';
import starIcone2 from './image/별점2.png';
import starIcone3 from './image/별점3.png';
import starIcone4 from './image/별점4.png';
import starIcone5 from './image/별점5.png';
import calenderIcone from './image/달력이미지.png';
import pencilIcone from './image/연필3d.png';
import handIcone from './image/합쳐진별원폰.svg';
import styled from 'styled-components';
import axiosInstance from './axios/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 20px;
  max-width: 100vw;
  box-sizing: border-box;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Maintext = styled.div`
  color: #000;
  margin-top: -80px;
  margin-left: 30px;
  font-size: 36px;
  z-index: 3;
  position: relative;
  p {
    margin-left: -190px;
  }

  p:nth-child(2) {
    font-weight: bold;
    margin-top: -50px;
  }
`;

const MemoImage = styled.img`
  width: 240px;
  height: 200px;
  margin-left: 200px;
  margin-top: 30px;
  z-index: 2;
  position: relative;
`;

const Underline = styled.div`
  width: 80%;
  height: 1px;
  background-color: #E7E7E7;
  margin: 10px auto 0 auto;
  z-index: 2;
  position: relative;
`;

const Underline2 = styled.div`
  width: 80%;
  height: 1px;
  background-color: #E7E7E7;
  margin: -19px auto 0 auto;
  z-index: 2;
  position: relative;
`;

const StarImage = styled.img`
  width: 240px;
  height: 38px;
  margin-left: 10px;
  margin-top: 30px;
  z-index: 2;
  position: relative;
`;

const Weektext = styled.div`
  color: #000;
  margin-top: -200px;
  position: relative;
  z-index: 3;
  text-align: left;
   @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-style: normal;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bold;
    margin-left: 40px;
  }

  h1 {
  font-family: 'chab';
    font-size: 35px;
    font-weight: bold;
    margin-left: 40px;
     margin-top: 5px; 
    margin-bottom: 8px; 
    color: #FFCE4F;
  }
  
  h2{
    font-family: 'chab';
    font-size: 14px;
    font-weight: bold;
    margin-left: 40px;
     margin-top: 10px; 
    margin-bottom: -5px; 
    color: #FFBD11;
  }
`;

const GradientContainer = styled.div`
  background: linear-gradient(to right, #ffffff, #FFCE4F);
  width: 240px;
  height: 200px;
  margin-left: 200px;
  margin-top: 30px;
  z-index: 2;
  position: relative;
`;

const ShadowContainer = styled.div`
  width: 350px;
  height: 380px;
  background-color: #FCFCFC;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 80px;
  color: #000;
  padding: 5px;
  position: relative;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;

  p {
    text-align: left;
    margin-bottom: 13px;
    margin-left: 30px;
    font-size: 14px;
  }
`;

const BorderedText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  height: 30px;
  width: 300px;
  background-color: #FFCE4F;
  margin-top: -10px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const BorderedTextRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  height: 30px;
  width: 300px;
  background-color: #FF4F4F;
  margin-top: -10px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1px;
  height: 30px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 11px;
  color: #000000;
  margin-top: -70px;
  margin-left: 20px;
  margin-bottom: 30px;
  z-index: 3;
  position: relative;
`;

const ModalContent2 = styled.div`
  font-size: 15px;
  color: #000000;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: bold;
  z-index: 3;
  position: relative;
`;

const ModalContent3 = styled.div`
  font-size: 13px;
  color: #000000;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 3;
  position: relative;
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
  margin-bottom: 40px;
  font-weight: bold;
  
  &:hover {
    background-color: #ffd710;
  }
`;

const CalenderImage = styled.img`
  width: 311px;
  height: 250px;
  margin-left: 110px;
  margin-top: -90px;
  z-index: 1;
  position: relative;
`;

const PencilImage = styled.img`
  width: 120px;
  height: 150px;
  margin-left: 60%;
  margin-top: -40%;
  z-index: 1;
  position: relative;
`;

const HandImage = styled.img`
  width: 311px;
  height: 250px;
  margin-left: -29%;
  margin-top: -60%;
  z-index: 2;
  position: relative;
`;

 

function Statistics() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const handleRetestClick = () => {
    navigate('/test');
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axiosInstance.get('/analysis', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <h2>Loding...</h2>;
  }

  const getStarIcon = (star) => {
    switch (star) {
      case 1:
        return starIcone1;
      case 2:
        return starIcone2;
      case 3:
        return starIcone3;
      case 4:
        return starIcone4;
      case 5:
      default:
        return starIcone5;
    }
  };

  const getChalllenge = (needChallenge) => {
    switch (needChallenge) {
      case "Don't need ReductionAlcoholChallenge":
        return "절주가 필요하지 않습니다.";
      case "Weekly average alcohol dates: 3 Need ReductionAlcoholChallenge. ":
      default:
        return "절주가 필요하지 않습니다.";
    }
  };

  const getComments = (totalComments) => {
    switch (totalComments) {
      case "1 star comments":
        return "음주 습관을 개선할 필요가 있습니다. 건강을 위해 음주 빈도를 줄이고, 적정 음주량을 지키는 노력이 필요합니다. 작은 변화가 큰 차이를 만들 수 있습니다.";
      case "2 star comments":
        return "음주 습관에 조금 더 신경 쓸 필요가 있습니다. 현재 음주 패턴을 재고하고, 건강을 위해 더 나은 선택을 할 수 있도록 노력해 보세요. 조금만 더 신경 쓰면 좋은 결과를 얻을 수 있습니다.";
      case "3 star comments":
        return "현재 음주 습관이 나쁘지 않지만, 개선할 여지가 있습니다. 적정 음주량을 유지하고, 음주 빈도를 조금 더 조절하면 건강에 더욱 좋을 것입니다. 꾸준한 관리가 필요합니다.";
      case "4 star comments":
        return "좋은 음주 습관을 가지고 있습니다! 적정 음주량을 지키고, 건강을 고려한 선택을 하고 있는 점이 인상적입니다. 앞으로도 현재 습관을 유지해 나가길 바랍니다.";
      case "5 star comments":
      default:
        return "아주 훌륭한 음주 습관을 가지고 있습니다! 건강을 최우선으로 생각하며, 음주를 적절히 조절하는 모습이 매우 모범적입니다. 지금처럼만 유지하시면 됩니다.";
    }
  };


  return (
    <>
      <Container>
        <MemoImage src={memoIcone} />
        <Maintext>
          <p>{data.userName} 님의</p>
          <p>건강진단표,</p>
        </Maintext>
        <Underline />
        <StarImage src={getStarIcon(data.star)} />
        <GradientContainer></GradientContainer>
        <Weektext>
          <p>이번 주, 총</p>
          <h1>{data.weeklyTotalAlcohol.weeklyTotalBeer}병의 맥주,</h1>
          <h1>{data.weeklyTotalAlcohol.weeklyTotalSoju}병의 소주</h1>
          <h2>{data.weeklyTotalAlcohol.weeklyTotalHighball}잔의 하이볼 및 가벼운 음주</h2>
          <h2>{data.weeklyTotalAlcohol.weeklyTotalkaoliang}병의 고량주 및 고도수</h2>
        </Weektext>
        <Container2>
          <ShadowContainer>
            <p>{data.userName} 님의 기본 주량을 <strong>넘긴 날은,</strong></p>
            {data.analysisResponseDtoList && data.analysisResponseDtoList.length > 0 ? (
  data.analysisResponseDtoList.map((item, index) => (
    <BorderedText key={index}>{item.month}월 {item.day}일, {item.memo}</BorderedText>
  ))
) : (
  <BorderedText>없습니다.</BorderedText>
)}
            <p>이번 주 <strong>금주의 날은,</strong></p>
            <BorderedTextRed>{data.noAlcoholDays > 0 ? `${data.noAlcoholDays}일` : '"없었습니다."'}</BorderedTextRed>
            <p>음주 생활 <strong>분석결과,</strong></p>
            <BorderedText>{getChalllenge(data.needChallenge)}</BorderedText>
            <p>음주 예정일은, <strong>일주일 평균</strong></p>
            <BorderedText>{data.weeklyAverageAlcoholDays}일입니다.</BorderedText>
          </ShadowContainer>
        </Container2>

        <CalenderImage src={calenderIcone}></CalenderImage>
        <PencilImage src={pencilIcone}></PencilImage>
        <ModalContent>일주일 평균 음주 예정일이 3일 이상일 경우, 절주챌린지를 추천합니다.</ModalContent>
        <HandImage src={handIcone}></HandImage>
        <Underline2 />
        
        <ModalContent2>종합 코멘트</ModalContent2>
        <ModalContent3>{getComments(data.totalComments)}</ModalContent3>
        <Underline />
        <Container2>
          <RetestButton onClick={handleRetestClick}>술MBTI가 변한 것 같다면?</RetestButton>
        </Container2>
      </Container>
    </>
  );
}

export default Statistics;

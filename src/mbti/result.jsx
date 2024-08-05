import React, {useState}from 'react';
import * as S from './result.styled.js';
import Kingimage from '../image/king.png';
import Waringimage from '../image/warining.png';
import Starimage from '../image/star.png';
import Bellimage from '../image/bell.png';
import GrayContainerComponent from './GrayContainerComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import answer from './answer';  // answer 배열 임포트
import axiosInstance from '../axios/axiosInstance';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultIndex = location.state?.resultIndex;

  if (resultIndex === undefined || resultIndex === -1) {
    return <div>결과 없음</div>;
  }

  const resultData = answer[resultIndex];

  const handlehome = () => {
    handlePatchRequest();
    navigate('/home');
  };

  // React 컴포넌트 파일

  const [data, setData] = useState({}); // 업데이트할 데이터를 저장

  const handlePatchRequest = async () => {
    try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axiosInstance.patch(`/abtis/userinfos/${resultData.id}`, {},
      {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

      console.log('업데이트 성공:', response.data);
    } catch (error) {
      console.error('업데이트 실패:', error);
    }
  };

  return (
    <S.MainContainer>
      <S.Title>당신은</S.Title>
      <S.BubbleContainer>
        <S.BubbleContainertext>{resultData.title}</S.BubbleContainertext>의 술비티아이가 나왔습니다.
      </S.BubbleContainer>
      <S.GradientContainer>
      <S.Image src={Kingimage} alt="logo" />
      <S.GradientOverlay />
      </S.GradientContainer>
      <S.MiniContainer><S.FooterText2>{resultData.hashTag}</S.FooterText2></S.MiniContainer>
      <S.Subtext>{resultData.mainDescription}</S.Subtext>
      <S.Maintext>{resultData.title}</S.Maintext>
      <S.RowContainer>
        <GrayContainerComponent 
          imageSrc={Waringimage} 
          text={resultData.improvingDescription1} 
        />
        <GrayContainerComponent 
          imageSrc={Bellimage} 
          text={resultData.improvingDescription2}
        />
        <GrayContainerComponent 
          imageSrc={Starimage} 
          text={resultData.improvingDescription3} 
        />
      </S.RowContainer>
      <S.BubbleContainer2>더  <S.BubbleContainertext>자세히 </S.BubbleContainertext>  알아가고 싶어!</S.BubbleContainer2>
      <S.Button onClick={handlehome}><S.FooterText>주적주적 시작하기</S.FooterText></S.Button>
    </S.MainContainer>
  );
};

export default Result;

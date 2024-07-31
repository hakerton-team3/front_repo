// Section03.js
import React, { useState } from 'react';
import * as S from './Section3.styled';
import Gittimage from '../images/선물2.png';
import Ramenimage from '../images/ramen.png';

const Section03 = () => {
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleButtonClick = () => {
    setShowRecommendation(true);
  };

  return (
    <S.SectionContainer>
      {showRecommendation ? (
        <S.ContentContainer>
          <S.Title>오늘 안주는,<br></br>이걸로 어떨까요?</S.Title>
           
         
          <S.RecommendationContainer>
          <S.SubTitle>한식의 맛이<br></br>온전히 담겨있는 오늘의 픽은</S.SubTitle>
          <S.Title>매콤한 맛이 일품!</S.Title>
          <S.Recommandtitle>곱도리탕</S.Recommandtitle>
          </S.RecommendationContainer>
          <S.Button onClick={handleButtonClick}>
            오늘의 안주는 무엇일까요?
          </S.Button>
          <S.Button2>
            다시 추천 받기
          </S.Button2>
        </S.ContentContainer>
      ) : (
        <S.ContentContainer>
          <S.Image src={Gittimage} alt="gift" />
          <S.Title>JRMT 서경 님,</S.Title>
          <S.SubTitle>
            술자리를 즐기고 주량이 강해<br />
            모임 자리에 끝까지 남아있어요.
          </S.SubTitle>
          <S.SubTitle>
            그렇기에, <br />음주량에 맞는 <S.EmphasizedText>안주도 필요해요.</S.EmphasizedText>
          </S.SubTitle>
          <S.SubTitle>
            평소에 <S.EmphasizedText>한식을 즐기는</S.EmphasizedText><br />
            서경 님께 드리는 안주 추천은,
          </S.SubTitle>
          <S.Button onClick={handleButtonClick}>
            오늘의 안주는 무엇일까요?
          </S.Button>
        </S.ContentContainer>
      )}
    </S.SectionContainer>
  );
}

export default Section03;

import React, { useState } from 'react';
import * as S from './Section3.styled';
import Gittimage from '../image/선물2.png';
import Ramenimage from '../image/ramen.png';

const Section03 = () => {
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [currentRecommendation, setCurrentRecommendation] = useState(null);
  const userData = JSON.parse(localStorage.getItem('userData'));

 
  const recommendations = [
    {
      title: "매콤한 맛이 일품!",
      recommandTitle: "곱도리탕",
      subTitle: "한식의 맛이<br>온전히 담겨있는 오늘의 픽은"
    },
    {
      title: "담백하고 고소한",
      recommandTitle: "고등어구이",
      subTitle: "바다의 향기를 담은<br>오늘의 추천 요리는"
    },
    {
      title: "신선한 해산물의 향연",
      recommandTitle: "모둠회",
      subTitle: "바다의 신선함을 담은<br>오늘의 선택은"
    },
    {
      title: "바삭하고 짭짤한",
      recommandTitle: "치킨",
      subTitle: "모두가 좋아하는<br>오늘의 안주는"
    },
    {
      title: "달콤하고 짭조름한",
      recommandTitle: "양념갈비",
      subTitle: "육즙 가득한<br>오늘의 추천은"
    },{
      title: "부드럽고 고소한",
      recommandTitle: "육회",
      subTitle: "신선한 육질이 돋보이는<br>오늘의 추천 요리는"
    },
    {
      title: "매콤달콤한",
      recommandTitle: "떡볶이",
      subTitle: "입맛을 돋우는<br>오늘의 선택은"
    },
    {
      title: "쫄깃한 식감의",
      recommandTitle: "곱창",
      subTitle: "특유의 풍미를 자랑하는<br>오늘의 추천 요리는"
    },
    {
      title: "시원한 해산물의 향연",
      recommandTitle: "물회",
      subTitle: "여름철 최고의<br>시원한 선택은"
    },
    {
      title: "고소하고 담백한",
      recommandTitle: "피자",
      subTitle: "이탈리안 정통의<br>오늘의 선택은"
    },
    {
      title: "매콤한 양념의",
      recommandTitle: "골뱅이",
      subTitle: "감칠맛 나는<br>오늘의 안주는"
    },
    {
      title: "푸짐한 한 그릇",
      recommandTitle: "부대찌개",
      subTitle: "풍성한 재료가 가득한<br>오늘의 추천 요리는"
    },
    {
      title: "따끈한 국물의",
      recommandTitle: "오뎅탕",
      subTitle: "겨울철 최고의<br>따끈한 선택은"
    },
    {
      title: "매콤하고 쫄깃한",
      recommandTitle: "닭발",
      subTitle: "특유의 매운맛을 자랑하는<br>오늘의 추천 요리는"
    }
    
  ];

  const handleButtonClick = () => {
    setShowRecommendation(true);
    setCurrentRecommendation(recommendations[Math.floor(Math.random() * recommendations.length)]);
  };

  const handleReRecommend = () => {
    setCurrentRecommendation(recommendations[Math.floor(Math.random() * recommendations.length)]);
  };
    
  return (
    <S.SectionContainer>
      {showRecommendation ? (
        <S.ContentContainer>
          <S.Title>오늘 안주는,<br></br>이걸로 어떨까요?</S.Title>
          {currentRecommendation && (
            <S.RecommendationContainer>
              <S.SubTitle dangerouslySetInnerHTML={{ __html: currentRecommendation.subTitle }} />
              <S.Title>{currentRecommendation.title}</S.Title>
              <S.Recommandtitle>{currentRecommendation.recommandTitle}</S.Recommandtitle>
            </S.RecommendationContainer>
          )}
          <S.Button2 onClick={handleReRecommend}>
            다시 추천 받기
          </S.Button2>
        </S.ContentContainer>
      ) : (
        <S.ContentContainer>
          <S.Image src={Gittimage} alt="gift" />
          <S.Title>{userData.resultTitle} {userData.name}</S.Title>
          <S.SubTitle>
          평소 음주를 즐길 때 안주를 드시나요?<br />
           
          </S.SubTitle>
          <S.SubTitle>
          안주를 함께 먹는 것은 음주량을<br></br> 조절하는 하나의 유용한 수단입니다.
          </S.SubTitle>
          <S.SubTitle>
            오늘의 음주메이트가 되어줄 안주를 추천 받아보실까요?<br></br>
            {userData.name} 님께 드리는 안주 추천은,
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

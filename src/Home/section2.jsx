// Section02.js
import React from 'react';
import * as S from './Section2.styled';

const Section02 = () => {
  return (
    <S.MainContainer>
      <S.Title>간단 미션 메뉴</S.Title>
      <S.ScrollWrapper>
        <S.CardContainer>
          <S.Hole />
          <S.ContainererText>
            <div>내가</div>
            <div>받은★</div>
            <div>달성뱃지</div>
          </S.ContainererText>
        </S.CardContainer>
        <S.CardContainer>
          <S.Hole />
          <S.ContainererText>
            <div>다른</div>
            <div>미션★</div>
            <div>내용</div>
          </S.ContainererText>
        </S.CardContainer>
        <S.CardContainer>
          <S.Hole />
          <S.ContainererText>
            <div>또다른</div>
            <div>미션★</div>
            <div>내용</div>
          </S.ContainererText>
        </S.CardContainer>
        {/* Add more CardContainer components as needed */}
      </S.ScrollWrapper>
    </S.MainContainer>
  );
}

export default Section02;

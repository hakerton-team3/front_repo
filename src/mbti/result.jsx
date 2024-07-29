import React, { useState } from 'react';
import * as S from './result.styled.js';
import Bubble from '../Bubble.jsx';
import Kingimage from '../images/king.png';

const Result = () => {
  return (
    <S.MainContainer>
      <S.Title>당신은</S.Title>
      <Bubble text="JRMT의 술비티아이가 나왔습니다." />
      <S.Image src={Kingimage} alt="logo" />
      <S.Maintext>주량마스터</S.Maintext>
      <S.Graycontainer></S.Graycontainer>
    </S.MainContainer>
  );
};

export default Result;

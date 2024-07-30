import React from 'react';
import * as S from './Section3red.styled';
import Gittimage from '../images/선물2.png';
import RedSudol from '../image/Redsudol2.png'; // 경로 수정

const Section03 = () => {
  return (
    <S.SectionContainer>
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
        <S.Button>
          오늘의 안주는 무엇일까요?
        </S.Button>
      </S.ContentContainer>
      <S.ContentContainer2>
      <S.OverlayImage src={RedSudol} alt="new overlay" />
      금주챌린지 중에는<br></br> 안주 추천 시스템의 운영을 중단합니다.
      <S.SubTitle2> 운영중단</S.SubTitle2>
      </S.ContentContainer2>
     
    </S.SectionContainer>
  );
}

export default Section03;

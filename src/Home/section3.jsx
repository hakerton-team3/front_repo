// Section03.js
import React from 'react';
import * as S from './Section3.styled';
import Gittimage from '../images/선물2.png';

const Section03 = () => {
  return (
    <S.SectionContainer>
      <S.ContentContainer>
            <S.Image src={Gittimage} alt="gift" >
                        
                        </S.Image>
               
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
    </S.SectionContainer>
  );
}

export default Section03;

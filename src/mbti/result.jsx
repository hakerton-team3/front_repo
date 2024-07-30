import React from 'react';
import * as S from './result.styled.js';

import Kingimage from '../images/king.png';
import Waringimage from '../images/warining.png';
import Starimage from '../images/star.png';
import Bellimage from '../images/bell.png';
import GrayContainerComponent from './GrayContainerComponent';
import { useNavigate} from 'react-router-dom'; 
 
const Result = () => {
  const navigate = useNavigate();

  const handlehome = () => {
    navigate('/Home');
  };
  return (
    <S.MainContainer>
      <S.Title>당신은</S.Title>
      <S.BubbleContainer><S.BubbleContainertext>JRMT</S.BubbleContainertext>의 술비티아이가 나왔습니다.</S.BubbleContainer>
      <S.Image src={Kingimage} alt="logo" />
      <S.Maintext>주량마스터</S.Maintext>
      <S.RowContainer>
        <GrayContainerComponent 
          imageSrc={Waringimage} 
          text="강한 술을 즐기지만,<br>과도한 음주는<br>건강에 해로울 수 있습니다." 
        />
        <GrayContainerComponent 
          imageSrc={Bellimage} 
          text="술을 마시지 않는 날을,<br>정해 간과 체력을<br>보호하세요." 
        />
        <GrayContainerComponent 
          imageSrc={Starimage} 
          text="균형 잡힌 생활을 위해<br>음주 후 충분한 휴식과<br>수분 섭취를 잊지 마세요." 
        />
     
      </S.RowContainer>
      <S.BubbleContainer2>더  <S.BubbleContainertext>자세히 </S.BubbleContainertext>  알아가고 싶어!</S.BubbleContainer2>
      <S.Button onClick={handlehome}><S.FooterText>주적주적 시작하기</S.FooterText></S.Button>
      
    </S.MainContainer>
  );
};

export default Result;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SectionRed.styled';
import { FiSettings } from 'react-icons/fi';
import sudolImage from  '../image/redsudol.png';

const Section01 = () => {
  const navigate = useNavigate();

  const handleEmergencyContactsClick = () => {
    navigate('/emergency-contacts');
  };

  return (
    <S.MainWrap>
      <S.GlobalStyle />
      <S.MainContainer>
        <S.TransparentContainer>
          <S.Title>
            김서경 님의
            <S.IconWrapper>
              <FiSettings size={20} />
            </S.IconWrapper>
          </S.Title>
          <S.FontChab> 음주정보 </S.FontChab>
          <S.WhiteContainer>
            <S.Subtitle>
              2주 간의 금주챌린지 중
            </S.Subtitle>
          </S.WhiteContainer>
          <S.WhiteSubContainer>
            <div>음주 캘린더 | 약속</div>
            <S.LargeText>오늘 18:00</S.LargeText>
            <S.YellowContainer>동아리 회식자리</S.YellowContainer>
            <S.Smalltitle>*목표 절주 주량을 확인하러가요</S.Smalltitle>
          </S.WhiteSubContainer>
          <S.Image src={sudolImage} alt="sudol" />
        </S.TransparentContainer>
        <S.YellowContainer2>
          <S.Smalltitle>숙취가 심한 서경님! 숙취해소제 챙겨요</S.Smalltitle>
        </S.YellowContainer2>
        
        
        
        <S.Button onClick={handleEmergencyContactsClick}>
          <S.LargeText>비상연락망</S.LargeText>
        </S.Button>
        
        <S.Smalltitle>음주 약속 시간에 알람으로 가장 상단에 띄울 번호를 설정해주세요.</S.Smalltitle>
      </S.MainContainer>
    </S.MainWrap>
  );
}

export default Section01;
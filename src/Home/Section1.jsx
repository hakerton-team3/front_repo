import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Section01.styled';
import { FiSettings } from 'react-icons/fi';
import sudolImage from  '../image/sudol2.svg';
import axiosInstance from '../axios/axiosInstance';

const Section01 = () => {
  const navigate = useNavigate();

  const handleEmergencyContactsClick = () => {
    navigate('/contact');
  };


  const [data, setData] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    

    axiosInstance.get('/user-infos/user-name', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        setData(response.data);
        localStorage.setItem('userData', JSON.stringify({ name: response.data.name }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      axiosInstance.get('/user-infos/user-abti', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(response => {
          setDetails(response.data);
          const storedData = JSON.parse(localStorage.getItem('userData')) || {};
          localStorage.setItem('userData', JSON.stringify({ ...storedData, resultTitle: response.data.title }));
        })
        .catch(error => {
          console.error('Error fetching user title:', error);
        });




    }, []);

  if (!data) {
    return <h2>Loding...</h2>;
  }
  
  // const userData = JSON.parse(localStorage.getItem('userData'));
 
  return (
    <S.MainWrap>
     
      <S.MainContainer>
        <S.TransparentContainer>
          <S.Title>
          {data.name}  님의
            <S.IconWrapper>
              <FiSettings size={20} />
            </S.IconWrapper>
          </S.Title>
          <S.FontChab> 음주정보 </S.FontChab>
          <S.WhiteContainer>
            <S.Subtitle>
              이번주 평균 음주량에 주의해 주세요.
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
          <S.Smalltitle>숙취가 심한 {data.name} 님! 숙취해소제 챙겨요</S.Smalltitle>
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

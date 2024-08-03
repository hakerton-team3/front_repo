import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SectionRed.styled';
import * as K from './Section2.styled';
import { FiSettings } from 'react-icons/fi';
import sudolImage from  '../image/redsudol.png';
import judalIcon2 from '../image/금주중 주달.png';
import closeIcon from '../image/닫기버튼.png';
import Modal from 'react-modal';
import axiosInstance from '../axios/axiosInstance';
import GoalDate from './GoalDate';

const Section01 = () => {

  const endChallenges = async () => {  
    try {
    
    const accessToken = localStorage.getItem('accessToken'); 
    if (!accessToken) {   
      throw new Error('Access token not found'); 
    }
  
    console.log('Using access token:', accessToken);
  
    const response = await axiosInstance.post( 
      `/challenges/weekly/achieved`,
      {}, 
      { 
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    );
  
    console.log(' 금주 챌린지 종료 완료:', response.data); 
    }catch (error) { 
    if (error.response && error.response.status === 404) { 
      alert('챌린지종료 실패 ');
    } else {
      console.error('챌린지종료에러:', error);
      alert('챌린지종료에러');
    }
  }
  };

  
  
  const navigate = useNavigate();

  const handleEmergencyContactsClick = () => {
    navigate('/emergency-contacts');
  };

  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [goalDate, setGoalDate] = useState(null); // GoalDate에서 전달받은 값을 저장할 상태

  const openModal6 = () => setIsOpen6(true);
  const closeModal6 = () => setIsOpen6(false);
  const openModal9 = () => setIsOpen9(true);
  const closeModal9 = () => setIsOpen9(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "rgba(248, 248, 248, 1)",
      width: "358px",
      height: "388px",
      borderRadius: "25px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
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
            <S.Subtitle onClick={goalDate === 0 ? openModal9 : openModal6}>
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


        <Modal ariaHideApp={false} isOpen={isOpen6} onRequestClose={closeModal6} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal6} />
        <K.ModalTitle6>금주챌린지</K.ModalTitle6>
        <K.ModalContent>2주동안 금주를 실천하는 챌린지, 솔직하게 임하길.</K.ModalContent>
        <K.JudalImage2 src={judalIcon2}></K.JudalImage2>
        <K.GemjuContainer>
          <h4>성공까지</h4>
          <GoalDate setGoalDate={setGoalDate}/>
          <h4>남았어요.</h4> 
        </K.GemjuContainer>
        <K.SubmitButton onClick={endChallenges}>종료하기</K.SubmitButton>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen9} onRequestClose={closeModal9} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal9} />
        <K.ModalTitle6>금주챌린지성공</K.ModalTitle6>
        <K.ModalContent>2주동안 금주를 실천하는 챌린지, 솔직하게 임하길.</K.ModalContent>
        <K.JudalImage2 src={judalIcon2}></K.JudalImage2>
        <K.GemjuContainer>
          <h4>성공까지</h4>
          <GoalDate setGoalDate={setGoalDate}/>
          <h4>남았어요.</h4> 
        </K.GemjuContainer>
        <K.SubmitButton onClick={endChallenges}>챌린지 끝내기</K.SubmitButton>
      </Modal>
        
        
        
        <S.Button onClick={handleEmergencyContactsClick}>
          <S.LargeText>비상연락망</S.LargeText>
        </S.Button>
        
        <S.Smalltitle>음주 약속 시간에 알람으로 가장 상단에 띄울 번호를 설정해주세요.</S.Smalltitle>
      </S.MainContainer>
    </S.MainWrap>
  );
}

export default Section01;

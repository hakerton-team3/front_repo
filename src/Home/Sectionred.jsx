import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SectionRed.styled';
import * as K from './Section2.styled';
import { FiSettings } from 'react-icons/fi';
import sudolImage from '../image/redsudol.png';
import judalIcon2 from '../image/금주중 주달.png';
import closeIcon from '../image/닫기버튼.png';
import gemjuCakeIcon from '../image/금주케이크.svg';
import Modal from 'react-modal';
import axiosInstance from '../axios/axiosInstance';

const Section01 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
   
  const userData = JSON.parse(localStorage.getItem('userData'));
 
  const navigate = useNavigate();


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        const accessToken = localStorage.getItem('accessToken');
        const response = await axiosInstance.get('/challenges/weekly', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const endChallenges = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const response = await axiosInstance.post(//
        `/challenges/weekly/achieved`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log('Challenge ended:', response.data);
      closeModal6(); // Assuming this modal relates to ending the challenge
      closeModal9();
    } catch (error) {
      const errorMessage = error.response && error.response.status === 404 ? '챌린지종료 실패' : '챌린지종료에러';
      alert(errorMessage);
      console.error('Challenge end error:', error);
    }
  };

  const handleEmergencyContactsClick = () => {
    navigate('/contact');
  };
  const HandleYellowHome = () => {
    navigate('/home');
  };

  const openModal6 = () => setIsOpen6(true);
  const closeModal6 = () => setIsOpen6(false);
  const openModal9 = () => setIsOpen9(true);
  const closeModal9 = () => setIsOpen9(false);

  const customStyles = {
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
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
      alignItems: 'center',
    },
  };

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!data) {
    return <h2>Loading...</h2>;
  }


  return (
    <S.MainWrap>
      <S.MainContainer>
        <S.TransparentContainer>
          <S.Title>
            {userData.name} 님의
            <S.IconWrapper>
              <FiSettings size={20} />
            </S.IconWrapper>
          </S.Title>
          <S.FontChab> 음주정보 </S.FontChab>
          <S.WhiteContainer>
            <S.Subtitle onClick={data.remainingDate === 0 ? openModal9 : openModal6}>
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
          <K.JudalImage2 src={judalIcon2} alt="Judal" />
          <K.GemjuContainer>
            <h4>성공까지</h4>
            <K.H1>{data.remainingDate}일</K.H1>
            <h4>남았어요.</h4>
          </K.GemjuContainer>
          <K.SubmitButton onClick={() => { HandleYellowHome();  endChallenges(); }}>종료하기</K.SubmitButton>
        </Modal>

        <Modal ariaHideApp={false} isOpen={isOpen9} onRequestClose={closeModal9} style={customStyles}>
          <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal9} />
          <K.ModalTitle6>금주챌린지</K.ModalTitle6>
          <K.ModalContent>2주동안 금주를 실천하는 챌린지, 솔직하게 임하길.</K.ModalContent>
          <S.GemjuCakeImg src={gemjuCakeIcon} alt="Cake" />
          <S.Line1>김서경님의 챌린지</S.Line1>
          <S.Line2>
            <span className="highlight">성공</span>을 축하드립니다.
          </S.Line2>
          <K.SubmitButton onClick={() => { HandleYellowHome();  endChallenges(); }}>챌린지 끝내기</K.SubmitButton>
        </Modal>

        <S.Button onClick={handleEmergencyContactsClick}>
          <S.LargeText>비상연락망</S.LargeText>
        </S.Button>

        <S.Smalltitle>음주 약속 시간에 알람으로 가장 상단에 띄울 번호를 설정해주세요.</S.Smalltitle>
      </S.MainContainer>
    </S.MainWrap>
  );
};

export default Section01;

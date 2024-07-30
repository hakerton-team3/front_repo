// Section02.js
import * as S from './Section2.styled';
import * as K from './Section2.styled';
import React, { useState } from 'react';
import Modal from 'react-modal';
import closeIcon from '../image/닫기버튼.png';
import badgeIcon1 from '../image/미획득뱃지1.svg';
import badgeIcon2 from '../image/미획득뱃지2.svg';
import badgeIcon3 from '../image/미획득뱃지3.svg';
import badgeIcon4 from '../image/미획득뱃지4.svg';
import badgeIcon5 from '../image/미획득뱃지5.svg';
import badgeIcon6 from '../image/미획득뱃지6.svg';
import badgeIcon7 from '../image/미획득뱃지7.svg';
import badgeIcon8 from '../image/미획득뱃지8.svg';
import judalIcon from '../image/금주 주달.png';
import judalIcon2 from '../image/금주중 주달.png';
import { useNavigate } from 'react-router-dom';


const Section02 = () => {

  const navigate = useNavigate();

  const HandleredHome = () => {
    navigate('/redhome');
  };


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);
  const openModal3 = () => setIsOpen3(true);
  const closeModal3 = () => setIsOpen3(false);
  const openModal4 = () => setIsOpen4(true);
  const closeModal4 = () => setIsOpen4(false);
  const openModal5 = () => setIsOpen5(true);
  const closeModal5 = () => setIsOpen5(false);
  const openModal6 = () => setIsOpen6(true);
  const closeModal6 = () => setIsOpen6(false);
  const openModal7 = () => setIsOpen7(true);
  const closeModal7 = () => setIsOpen7(false);

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
    <S.MainContainer>
      <S.Title>간단 미션 메뉴</S.Title>
      <S.ScrollWrapper>
        <S.CardContainer onClick={openModal1}>
          <S.Hole />
          <S.ContainererText>
            <div>내가</div>
            <div>받은★</div>
            <div>달성뱃지</div>
          </S.ContainererText>
        </S.CardContainer>
        <S.CardContainer onClick={openModal2}>
          <S.Hole />
          <S.ContainererText>
            <div>미션으로</div>
            <div>바로잡기</div>
            
          </S.ContainererText>
        </S.CardContainer>
        <S.CardContainer onClick={openModal3}>
          <S.Hole />
          <S.ContainererText>
            <div>나만의</div>
            <div>미션</div>
            
          </S.ContainererText>
        </S.CardContainer>
        {/* Add more CardContainer components as needed */}
      </S.ScrollWrapper>

      <Modal ariaHideApp={false} isOpen={isOpen1} onRequestClose={closeModal1} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal1} />
        <K.ModalTitle>달성뱃지 보관함</K.ModalTitle>
        <K.ModalContent>여태 모은 미션뱃지와</K.ModalContent>
        <K.ModalContent>앞으로 도전하게 될 달성뱃지를 모아서 확인해요.</K.ModalContent>
        <K.BadgeContainer>
          <K.Badge>
            <K.BadgeImage src={badgeIcon1} />
            <K.BadgeText>미션달성 5회</K.BadgeText>
          </K.Badge>
          <K.Badge>
            <K.BadgeImage src={badgeIcon2} />
            <K.BadgeText>미션달성 10회</K.BadgeText>
          </K.Badge>
        </K.BadgeContainer>
        <K.BadgeContainer>
          <K.Badge>
            <K.BadgeImage src={badgeIcon3} />
            <K.BadgeText>미션달성 20회</K.BadgeText>
          </K.Badge>
          <K.Badge>
            <K.BadgeImage src={badgeIcon4} />
            <K.BadgeText>미션달성 30회</K.BadgeText>
          </K.Badge>
        </K.BadgeContainer>
        <K.BadgeContainer>
          <K.Badge>
            <K.BadgeImage src={badgeIcon5} />
            <K.BadgeText>한달 출석</K.BadgeText>
          </K.Badge>
          <K.Badge>
            <K.BadgeImage src={badgeIcon6} />
            <K.BadgeText>일년 출석</K.BadgeText>
          </K.Badge>
        </K.BadgeContainer>
        <K.BadgeContainer>
          <K.Badge>
            <K.BadgeImage src={badgeIcon7} />
            <K.BadgeText>절주챌린지</K.BadgeText>
          </K.Badge>
          <K.Badge>
            <K.BadgeImage src={badgeIcon8} />
            <K.BadgeText>금주챌린지</K.BadgeText>
          </K.Badge>
        </K.BadgeContainer>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen2} onRequestClose={closeModal2} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal2} />
        <K.ModalTitle>오늘의 미션</K.ModalTitle>
        <K.ModalContent>앱 사용과 음주 습관 관리법까지 한 번에 익혀보도록 합시다.</K.ModalContent>
        <K.BorderedText>출석체크 하기</K.BorderedText>
        <K.BorderedText>안주 추천 받기 기능 사용하기</K.BorderedText>
        <K.BorderedText>주량 재설정하기</K.BorderedText>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen3} onRequestClose={closeModal3} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal3} />
        <K.ModalTitle3>나만의 미션</K.ModalTitle3>
        <K.ModalContent>나만의 미션으로 절주챌린지와 금주챌린지에 도전해봐요.</K.ModalContent>
        <K.BorderedText onClick={openModal4}>절주챌린지 도전</K.BorderedText>
        <K.BorderedText onClick={openModal5}>금주챌린지 도전</K.BorderedText>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen4} onRequestClose={closeModal4} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal4} />
        <K.ModalTitle>절주챌린지</K.ModalTitle>
        <K.ModalContent>조금씩 음주량을 줄여보는 챌린지, 목표량은 2병 이하부터.</K.ModalContent>
        <K.AppContainer>
          <K.GoalContainer>
            <K.GoalLabel htmlFor="goal-input">이번 주 음주 목표량</K.GoalLabel>
            <K.GoalInput type="text" id="goal-input" />
          </K.GoalContainer>
          <K.Underline />
          <K.GoalContainer>
            <K.GoalLabel htmlFor="goal-input">다음 주 음주 목표량</K.GoalLabel>
            <K.GoalInput type="text" id="goal-input" />
          </K.GoalContainer>
          <K.Underline />
          <K.GoalContainer>
            <K.GoalLabel2 htmlFor="goal-input">평균 감소 주량</K.GoalLabel2>
            <K.GoalInput type="text" id="goal-input" />
          </K.GoalContainer>
        </K.AppContainer>
        <K.SubmitButton>반 병 이상 줄여보도록, 확인.</K.SubmitButton>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen5} onRequestClose={closeModal5} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal5} />
        <K.ModalTitle>금주챌린지</K.ModalTitle>
        <K.ModalContent>2주동안 금주를 실천하는 챌린지, 솔직하게 임하길.</K.ModalContent>
        <K.JudalImage src={judalIcon}></K.JudalImage>
        <K.SubmitButton onClick={HandleredHome}>즉시 시작하기</K.SubmitButton>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen6} onRequestClose={closeModal6} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal6} />
        <K.ModalTitle6>금주챌린지</K.ModalTitle6>
        <K.ModalContent>2주동안 금주를 실천하는 챌린지, 솔직하게 임하길.</K.ModalContent>
        <K.JudalImage2 src={judalIcon2}></K.JudalImage2>
        <K.GemjuContainer>
          <h4>성공까지</h4>
          <K.H1>8일</K.H1>
          <h4>남았어요.</h4>
        </K.GemjuContainer>
        <K.SubmitButton>포기하기</K.SubmitButton>
      </Modal>

      <Modal ariaHideApp={false} isOpen={isOpen7} onRequestClose={closeModal7} style={customStyles}>
        <K.CloseIcon src={closeIcon} alt="Close" onClick={closeModal7} />
        <K.ModalTitle6>절주챌린지</K.ModalTitle6>
        <K.ModalContent>2주동안 절주를 실천하는 챌린지, 솔직하게 임하길.</K.ModalContent>
        <K.JudalImage2 src={judalIcon2}></K.JudalImage2>
        <K.GemjuContainer>
          <h4>성공까지</h4>
          <K.H1>8일</K.H1>
          <h4>남았어요.</h4>
        </K.GemjuContainer>
        <K.SubmitButton>포기하기</K.SubmitButton>
      </Modal>
    </S.MainContainer>
  );
}

export default Section02;

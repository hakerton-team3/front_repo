import React, { useState } from 'react';
import Bubble from '../Bubble';
import * as S from './test.styled';
import Beerimage from '../images/6.png';
import { useNavigate, Outlet } from 'react-router-dom'; 



const questions = [
  {
    question: "1. 당신의 음주 주기는 어떤가요?",
    answers: ['주 1회', '주 2회~4회', '주 5회~6회', '매일']
  },
  {
    question: "2. 당신의 술자리 배경은 어떤가요?",
    answers: ['요리 주점', '일반 음식점', '지인 집', '집']
  },
  {
    question: "3. 당신의 참석 유형은 어떤가요? ",
    answers: ['회식 자리', '지인과 함께', '가족과 함께', '혼자']
  },
  {
    question: "4. 당신은 왜 음주를 하나요? ",
    answers: ['즐거움', '감정 및 스트레스 해소', '지인과의 약속', '공식적인 술자리']
  },
  {
    question: "5. 약속 특성에 대해 알려주세요 ",
    answers: ['예정된 자리', '번개']
  },
  {
    question: "6. 약속 주기의 패턴은 어떤가요? ",
    answers: ['규칙적', '불규칙적']
  },
  {
    question: "7. 소주 기준 당신의 주량은 어떤가요? ",
    answers: ['1병이하', '1병~2병', '2병~2병반', '3병이상']
  },
  {
    question: "8. 당신의 주종은 무엇인가요?",
    answers: ['소주', '맥주', '전통주', '기타']
  },
  {
    question: "9. 좋아하는 안주는 무엇인가요?",
    answers: ['한식', '일식', '중식', '그외']
  },
  {
    question: "10. 평균적인 숙취 정도를 표시하세요.",
    answers: ['멀쩡함', '조금힘듬', '많이힘듬', '일상생활불가']
  },
  
  // 더 많은 질문을 여기에 추가할 수 있습니다.
];




const Test = () => {
  const [selectedIndexes, setSelectedIndexes] = useState({});

  const handleSelect = (questionIndex, answerIndex) => {
    setSelectedIndexes(prevState => ({
      ...prevState,
      [questionIndex]: answerIndex,
    }));
  };

 
    const navigate = useNavigate();
  
    const handleresultLogin = () => {
      navigate('/result');  
    };
  
  return (
    <S.MainContainer>
      <S.Title>잠깐,</S.Title>
      <Bubble text="사용자 아이디의 평소 음주 습관을 보다 재미있게 돌이켜 보면 어떨까요?" />
      <Bubble text="최근 음주 스타일을 바탕으로 솔비티아이에 임해주세요." />
      {questions.map((q, questionIndex) => (
        <React.Fragment key={questionIndex}>
          <S.QuestionSection>
            <S.QuestionText>{q.question}</S.QuestionText>
            <S.RatingContainer>
              {q.answers.map((answer, answerIndex) => (
                <S.RatingItem
                  key={answerIndex}
                  onClick={() => handleSelect(questionIndex, answerIndex)}
                >
                  <S.RatingCircle
                    className={selectedIndexes[questionIndex] === answerIndex ? 'selected' : ''}
                  />
                  <S.RatingText>{answer}</S.RatingText>
                </S.RatingItem>
              ))}
            </S.RatingContainer>
          </S.QuestionSection>
          {questionIndex < questions.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
      <S.Divider />
      <S.Image src={Beerimage} alt="logo" />
      <S.Container>
      <S.Instruction>아래 공백에 사용자의 이름을 입력해주세요. </S.Instruction>
      <S.InputLine />
      <S.MainText>
        님의 <S.Highlight>술</S.Highlight><S.SubHighlight>BTI</S.SubHighlight>는?
      </S.MainText>
      </S.Container>
      <S.Button onClick={handleresultLogin}>확인하러 가기</S.Button>
      <S.BackContainer>
     
      <S.FooterText>주적<br />酒적</S.FooterText> 
     
      

      </S.BackContainer>
    </S.MainContainer>
  );
};

export default Test;

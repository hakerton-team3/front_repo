import React, { useState, useEffect } from 'react';
import * as S from './test.styled';
import Beerimage from '../image/6.png';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import axiosInstance from '../axios/axiosInstance';
import answer from './answer'; // answer 배열 임포트

const Test = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [userName, setUserName] = useState(''); // 사용자 이름 상태 추가
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    // 사용자 이름을 localStorage에서 가져오기
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.name) {
      setUserName(userData.name);
    }
  }, []);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleresultLogin = async () => {
    const resultIndex = calculateResult(answers);
    if (resultIndex === -1) {
      alert('결과를 계산할 수 없습니다.');
      return;
    }
    const resultData = answer[resultIndex];
    const averageAlcoholAmount = count2

    const formData = {
      title: resultData.title,
      description: resultData.mainDescription,
      detail: resultData.hashTag,
      improvingDescription1: resultData.improvingDescription1,
      improvingDescription2: resultData.improvingDescription2,
      improvingDescription3: resultData.improvingDescription3,
      weeklyAlcoholAmount: count,
      averageAlcoholAmount: count2,
    };

    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      console.log('Using access token:', accessToken);

      const responsePatch = await axiosInstance.patch(
        '/user-infos/user-drink-amount',
        {
          weeklyAlcoholAmount: count,
          averageAlcoholAmount: count2,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      localStorage.setItem('resultTitle', resultData.title);

      console.log('PATCH Response:', responsePatch.data);

      const responsePost = await axiosInstance.post('/abtis', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('POST Response:', responsePost.data);
      navigate('/result', { state: { resultIndex } });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('사용자 생성 중 오류가 발생했습니다');
      } else {
        console.error('사용자 생성 중 오류가 발생했습니다:', error);
        alert('사용자 생성 중 오류가 발생했습니다');
      }
    }
  };

  

  const calculateResult = (answers) => {
    if (answers[0] === 0 && answers[1] === 0 && answers[2] === 0) {
      return 0;
    } else if (answers[0] === 1 && answers[1] === 1 && answers[2] === 1) {
      return 1;
    } else if (answers[0] === 0 && answers[1] === 0 && answers[2] === 1) {
      return 2;
    } else if (answers[0] === 0 && answers[1] === 1 && answers[2] === 0) {
      return 3;
    } else if (answers[0] === 0 && answers[1] === 1 && answers[2] === 1) {
      return 4;
    } else if (answers[0] === 1 && answers[1] === 0 && answers[2] === 0) {
      return 5;
    } else if (answers[0] === 1 && answers[1] === 0 && answers[2] === 1) {
      return 6;
    } else if (answers[0] === 1 && answers[1] === 1 && answers[2] === 0) {
      return 7;
    } else {
      return -1; // 결과 없음
    }
  };

  const questions = [
    {
      questionText: "1. 오랜 기간 진행한 프로젝트가 끝이 났다.<br>그동안의 고생을 보상하기 위한 당신의 선택은?",
      options: [
        "지인들과 함께 술 한 잔 하며 시간을 보낸다",
        "넷플릭스를 켜고 술 한잔을 하며 나만의 시간을 보낸다."
      ]
    },
    {
      questionText: "2. 기다리던 연휴가 시작되었다. 당신의 선택은?",
      options: [
        "연휴를 맞아 지인들과 모여 술 한 잔 한다",
        "혼자서 연휴의 여유를 즐기며 술 한 잔 한다"
      ]
    },
    {
      questionText: "3. 좋아하는 팀이 중요한 경기에서 이겼다?",
      options: [
        "친구들과 모여 경기 승리를 축하하며 술 한 잔 한다",
        "혼자서 경기를 다시 보며 술 한잔 한다"
      ]
    },
    {
      questionText: "4. 시험 기간이 끝나고 스트레스를<br> 풀며 술을 마시고 있다. 당신의 선택은?",
      options: [
        "스트레스를 술로 풀기 위해 많이 마신다",
        "약간의 취기가 있는 상태를 즐긴다"
      ]
    },
    {
      questionText: "5. 오랜만에 친구들과 여행을 갔다. 당신의 선택은?",
      options: [
        "친구들과의 여행이니 술을 많이 마신다",
        "경치와 대화를 즐기며 적당히 마신다"
      ]
    },
    {
      questionText: "6. 무제한 칵테일 술집에 갔다.당신의 선택은?",
      options: [
        "무제한이니 종류별로 최대한 많이 마신다",
        "가격과 주량을 생각하여 두세 잔 정도만 마신다"
      ]
    },
    {
      questionText: "7. 수업이 끝나고 간단하게 한 잔 하자고 물어보는 친구,<br>당신의 선택은?",
      options: [
        "술약속은 언제나 좋다",
        "갑작스러운 약속은 부담스럽다"
      ]
    },
    {
      questionText: "8. 동료가 당일 저녁에 새로 생긴 술집을 가자고 한다면,<br>당신의 선택은?",
      options: [
        "새로운 곳을 즉흥적으로 가는게 좋다",
        "미리 알아본 술집이 더 좋다"
      ]
    },
    {
      questionText: "9. 친구들과 자주 가던 바에 간 당신의 선택은?",
      options: [
        "매번 마시던 그 메뉴를 주문한다",
        "바텐더에게 추천을 받는다"
      ]
    },
   
  ];

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 0.5);
  };
  
  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 0.5 : 0));
  };
  
  const increaseCount2 = () => {
    setCount2((prevCount) => prevCount + 0.5);
  };
  
  const decreaseCount2 = () => {
    setCount2((prevCount) => (prevCount > 0 ? prevCount - 0.5 : 0));
  };

  
  return (
    <S.MainContainer>
      <S.Title>잠깐,</S.Title>
      <S.BubbleContainer>
        <S.BubbleContainerText2>
          <S.BubbleContainerText2>{userName}</S.BubbleContainerText2>님의 평소음주 습관을
        </S.BubbleContainerText2>
        <S.BubbleContainerText2>
          보다 재미있게 돌이켜 보면 어떨까요?
        </S.BubbleContainerText2>
      </S.BubbleContainer>
      <S.BubbleContainer>
        <S.BubbleContainerText2>
          최근 음주 스타일 바탕으로 <S.BubbleContainerText>술비티아이</S.BubbleContainerText>에 임해주세요.
        </S.BubbleContainerText2>
      </S.BubbleContainer>
      <S.Divider />
      {questions.map((question, index) => (
        <React.Fragment key={index}>
          <Question
            questionText={question.questionText}
            options={question.options}
            selectedOption={answers[index]} // 선택된 옵션을 전달
            onAnswerChange={(optionIndex) => handleAnswerChange(index, optionIndex)}
          />
          <S.Divider />
        </React.Fragment>
      ))}
      
      <S.Image src={Beerimage} alt="logo" />
      <S.Container>
        <S.ParentContainer>
          <S.Instruction2>
            나의 주량은
          </S.Instruction2>
          <S.ParentContainer2>
            <S.Instruction5>소주기준</S.Instruction5>
            <S.NumberContainer>
              <S.NumberButton onClick={decreaseCount}>-</S.NumberButton>
              <S.NumberDisplay>{count}</S.NumberDisplay>
              <S.NumberButton onClick={increaseCount}>+</S.NumberButton>
            </S.NumberContainer>
            <S.Instruction4>병을 마셔요</S.Instruction4>
          </S.ParentContainer2>
        </S.ParentContainer>
        
      </S.Container>
      <S.Container>
        <S.ParentContainer>
          <S.Instruction2>
            일주일에
          </S.Instruction2>
          <S.ParentContainer2>
            <S.Instruction5>소주기준</S.Instruction5>
            <S.NumberContainer>
              <S.NumberButton onClick={decreaseCount2}>-</S.NumberButton>
              <S.NumberDisplay>{count2}</S.NumberDisplay>
              <S.NumberButton onClick={increaseCount2}>+</S.NumberButton>
            </S.NumberContainer>
            <S.Instruction4>병을 마셔요</S.Instruction4>
          </S.ParentContainer2>
        </S.ParentContainer>
        <S.MainText>
          {userName}님의 <S.Highlight>술</S.Highlight><S.SubHighlight>BTI</S.SubHighlight>는?
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

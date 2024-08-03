import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios/axiosInstance';
import * as K from './Section2.styled';

// 목표 날짜를 가져오는 비동기 함수
const goalDate = async () => {  
  try {
    const accessToken = localStorage.getItem('accessToken'); 
    const response = await axiosInstance.get(
      `/challenges/weekly`, 
      { 
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    );

    const data = response.data;
    console.log(data.remainingDate);
    return data.remainingDate;
  } catch (error) {
    console.log(error);
    return null; // 오류 발생 시 null 반환
  }
};

const GoalDate = ({ setGoalDate }) => {
  const [printGoalDate, setPrintGoalDate] = useState(null); // 상태 초기화

  useEffect(() => {
    const fetchGoalDate = async () => {
      const date = await goalDate();
      setPrintGoalDate(date);
      setGoalDate(date); // 상위 컴포넌트로 값 전달
    };

    fetchGoalDate();
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  return (
    <div>
      <K.H1>{printGoalDate ? `${printGoalDate} 일` : '로딩 중...'}</K.H1>
    </div>
  );
};

export default GoalDate;

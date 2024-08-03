import React from 'react';
import * as K from './Section2.styled';

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
};

const DateComponent = () => {
  const currentDate = getCurrentDate();

  return (
    <K.BorderedTextSmall>{currentDate}</K.BorderedTextSmall>
  );
};

export default DateComponent;

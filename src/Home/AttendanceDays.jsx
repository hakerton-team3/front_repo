// AttendanceDays.jsx
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios/axiosInstance';
import * as S from './Section2.styled';

const GetAttendanceDays = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken'); 

    const response = await axiosInstance.get('/attendance/continuous',{
        headers: {
            Authorization: `Bearer ${accessToken}` 
          }
    });

    const data = response.data;

    if (!data.continuousAttendanceDays) {
      throw new Error('continuousAttendanceDays 값이 없습니다.');
    }

    return data.continuousAttendanceDays;
  } catch (error) {
    console.log(error);
  }
};


const AttendanceDays = () => {
  const [attendanceDays, setAttendanceDays] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAttendanceDays = async () => {
      setLoading(true);
      try {
        const days = await GetAttendanceDays();
        setAttendanceDays(days);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAttendanceDays();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }
  

  return (
    <div>
      <S.bigText>{attendanceDays} 일</S.bigText>
    </div>
  );
};

export default AttendanceDays; 

import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios/axiosInstance';
import * as K from './Section2.styled';
import badgeIcon1 from '../image/미획득뱃지1.svg';
import badgeIcon9 from '../image/획득뱃지.svg';

const getBadge = (length, thresholds) => {
  return thresholds.some(threshold => length >= threshold) ? badgeIcon9 : badgeIcon1;
};

const MyComponent = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [attendanceData, setAttendanceData] = useState({});
  const [challengeData, setChallengeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        console.log('뱃지 token:', accessToken);

        const [missionsResponse, attendanceResponse, challengeResponse] = await Promise.all([
          axiosInstance.post('/missions/completed', {}, {
            headers: { Authorization: `Bearer ${accessToken}` },
          }),
          axiosInstance.get('/badges/attendance', {
            headers: { Authorization: `Bearer ${accessToken}` },
          }),
          axiosInstance.get('/badges/weekly-challenge', {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
        ]);

        setData(missionsResponse.data.length);
        setAttendanceData(attendanceResponse.data);
        setChallengeData(challengeResponse.data);

      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const thresholds = [5, 10, 20, 30];

  return (
    <div>
      <K.BadgeContainer>
        {thresholds.map((threshold, index) => (
          <K.Badge key={index}>
            <K.BadgeImage src={getBadge(data, [threshold])} alt={`Badge for ${data} missions`} />
            <K.BadgeText>미션달성 {threshold}회</K.BadgeText>
          </K.Badge>
        ))}
      </K.BadgeContainer>
      <K.BadgeContainer>
        <K.Badge>
          <K.BadgeImage src={(attendanceData.maximumAttendanceDays >= 30) ? badgeIcon9 : badgeIcon1} />
          <K.BadgeText>한달 출석</K.BadgeText>
        </K.Badge>
        <K.Badge>
          <K.BadgeImage src={(attendanceData.maximumAttendanceDays >= 365) ? badgeIcon9 : badgeIcon1} />
          <K.BadgeText>일년 출석</K.BadgeText>
        </K.Badge>
      </K.BadgeContainer>
      <K.BadgeContainer>
        <K.Badge>
          <K.BadgeImage src={badgeIcon1} />
          <K.BadgeText>절주챌린지</K.BadgeText>
        </K.Badge>
        <K.Badge>
          <K.BadgeImage src={challengeData.existsSuccessWeeklyChallenge ? badgeIcon9 : badgeIcon1} />
          <K.BadgeText>금주챌린지</K.BadgeText>
        </K.Badge>
      </K.BadgeContainer>
    </div>
  );
};

export default MyComponent;

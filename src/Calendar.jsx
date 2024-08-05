import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb';
import Soju from './AType/Soju';
import OtherButton from './AType/OtherButton';
import axiosInstance from './axios/axiosInstance';
import { fetchLatestUserName } from './userUtils';

const CustomCalendar = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      const name = await fetchLatestUserName();
      setUserName(name);
    };

    getUserName();
  }, []);



  const [value, setValue] = useState(new Date());
  const [mark, setMark] = useState([]); // for marked dates
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [memo, setMemo] = useState('');
  const [rating, setRating] = useState(0);
  const [numberValue, setNumberValue] = useState(0);
  const [sojuNumberValue, setSojuNumberValue] = useState(0);
  const [highballNumberValue, setHighballNumberValue] = useState(0);
  const [kaoliangNumberValue, setKaoliangNumberValue] = useState(0);
  const [selectedDrink, setSelectedDrink] = useState('light');
  const [showMemoInput, setShowMemoInput] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDateChange = (date) => {
    setValue(date);
    setIsInfoVisible(true);
  };

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const increaseNumber = (setter) => {
    setter((prev) => Math.min(prev + 0.5, 10));
  };

  const decreaseNumber = (setter) => {
    setter((prev) => Math.max(prev - 0.5, 0));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      const year = parseInt(moment(value).format('YYYY'));
      const month = parseInt(moment(value).format('MM'));
      const day = parseInt(moment(value).format('DD'));

      const response = await axiosInstance.post(
        `/schedules/${year}/${month}/${day}`,
        {
          memo,
          todayCondition: rating,
          beerAlcohol: numberValue,
          sojuAlcohol: sojuNumberValue,
          highballAlcohol: highballNumberValue,
          kaoliangAlcohol: kaoliangNumberValue,
          schedulesDate: value,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      setMark(prevMark => [...prevMark, moment(value).format('YYYY-MM-DD')]);
      alert('음주량을 저장했습니다.');
    } catch (error) {
      console.error('Error creating schedule:', error);
      alert('약속을 생성하는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtherButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const todayDate = moment().format('M/D'); // Example: '7/30'

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      const year = parseInt(moment(value).format('YYYY'));
      const month = parseInt(moment(value).format('MM'));
      const day = parseInt(moment(value).format('DD'));

      const response = await axiosInstance.get(
        `/schedules/${year}/${month}/${day}`,
        {
          memo,
          todayCondition: rating,
          beerAlcohol: numberValue,
          sojuAlcohol: sojuNumberValue,
          highballAlcohol: highballNumberValue,
          kaoliangAlcohol: kaoliangNumberValue,
          schedulesDate: value,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      console.log('Schedule fetch response:', response);
    } catch (error) {
      console.error('Error fetching schedule:', error);
      alert('약속을 조회하는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const countWeek = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      const year = parseInt(moment(value).format('YYYY'));
      const month = parseInt(moment(value).format('MM'));
      const startDay = parseInt(moment(value).format('DD'));
      const endDay = parseInt(moment(value).format('DD'));

      const response = await axiosInstance.get(`/schedules/${year}/${month}/${startDay}/${endDay}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      console.log('Schedule fetch response:', response);
    } catch (error) {
      console.error('Error fetching schedule:', error);
      alert('주량 음주량 계산에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveLocal = (highballTemp, kaoliangTemp) => {
    setHighballNumberValue(highballTemp);
    setKaoliangNumberValue(kaoliangTemp);
    handleCloseModal();
  };

  const handleDate = (direction) => {
    const newDate = new Date(value);
    if (direction === 'next') {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setValue(newDate);
  };

  return (
    <div className={`react-calendar-wrapper ${isSwitchOn ? 'switch-on' : ''}`}>
      <div className="calendar-header">
        <div className="header-text">
          <div className="event-text">
            <br />
            {userName}님의<br />
            <strong>예정된 약속은,</strong>
          </div>
          <div className="event-circle"></div>
        </div>
        <div className="event-button">오늘 {todayDate}자 | {memo}</div>
      </div>

      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(local, date) => moment(date).format('D')}
        formatShortWeekday={(locale, date) => moment(date).format('ddd').toUpperCase()}
        formatMonthYear={(locale, date) => moment(date).format('MMMM YYYY')}
        nextLabel={
          <div onClick={() => handleDate('next')} style={{ cursor: 'pointer' }}>
            {'>'}
          </div>
        }
        prevLabel={
          <div onClick={() => handleDate('prev')} style={{ cursor: 'pointer' }}>
            {'<'}
          </div>
        }
        next2Label={null}
        prev2Label={null}
        calendarType="gregory"
        tileContent={({ date }) => {
          const formattedDate = moment(date).format('YYYY-MM-DD');
          if (mark.includes(formattedDate)) {
            return <div className="dot" key={date.toISOString()} style={{ backgroundColor: '#FFCE4F', borderRadius: '50%', width: '100%', height: '100%' }}></div>;
          }
          return null;
        }}
      />

      <div className="centerBottom">
        {isInfoVisible && (
          <div className={isSwitchOn ? 'soju-container' : 'info-container'}>
            {isSwitchOn ? (
              <Soju
                isSwitchOn={isSwitchOn}
                toggleSwitch={toggleSwitch}
                value={value}
                memo={memo}
                handleMemoChange={handleMemoChange}
                rating={rating}
                setRating={setRating}
                numberValue={sojuNumberValue}
                increaseNumber={() => increaseNumber(setSojuNumberValue)}
                decreaseNumber={() => decreaseNumber(setSojuNumberValue)}
                handleSave={handleSave}
                selectedDrink={selectedDrink}
                setSelectedDrink={setSelectedDrink}
                highballNumberValue={highballNumberValue}
                kaoliangNumberValue={kaoliangNumberValue}
                setHighballNumberValue={setHighballNumberValue}
                setKaoliangNumberValue={setKaoliangNumberValue}
                handleOtherButtonClick={handleOtherButtonClick}
              />
            ) : (
              <>
                <div className="top-bar">
                  <div className="beer-soju-text">맥주 체크해 주세요.</div>
                  <div
                    className={`switch-container ${isSwitchOn ? 'switch-on' : ''}`}
                    onClick={toggleSwitch}
                  >
                    <div className="switch">
                      <div className="switch-btn"></div>
                    </div>
                  </div>
                  <button className="other-button" onClick={handleOtherButtonClick}>
                    {' '}
                    그 외{' '}
                  </button>
                </div>
                <div className="info-box">
                  <div className="info-left">
                    <div>
                      <strong className="left-align">{moment(value).format('YYYY년 M월 D일')}</strong>
                    </div>
                    <div className="memo-button" onClick={() => setShowMemoInput(true)}>
                      약속 메모 |&nbsp;
                      {showMemoInput ? (
                        <input
                          type="text"
                          value={memo}
                          onChange={handleMemoChange}
                          placeholder="메모 입력창"
                          className="memo-input"
                          autoFocus
                          onBlur={() => setShowMemoInput(false)}
                        />
                      ) : (
                        memo
                      )}
                      {showMemoInput && (
                        <img
                          className="pencil"
                          src="/src/image/pencil.png"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the div click event
                            setShowMemoInput(false);
                          }}
                        />
                      )}
                    </div>
                    <div className="condition-box">
                      <strong style={{ fontSize: '13px', marginBottom: '10px', marginLeft: '5px' }}>
                        오늘의 컨디션 정도
                      </strong>
                      <div className="rating-container">
                        {[
                          { num: 1, label: '최하' },
                          { num: 2, label: '2' },
                          { num: 3, label: '3' },
                          { num: 4, label: '4' },
                          { num: 5, label: '최상' },
                        ].map((item) => (
                          <div key={item.num} className="rating-wrapper">
                            <div
                              className={`rating-circle ${rating === item.num ? 'selected' : ''}`}
                              onClick={() => setRating(item.num)}
                            ></div>
                            <div className="rating-label">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="info-right">
                    <div className="bottle-image"></div>
                    <div style={{ fontSize: '12px', marginLeft: '5%' }}>
                      음주량
                      <div className="number-container">
                        <button
                          onClick={() => decreaseNumber(setNumberValue)}
                          className="number-button"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={numberValue.toFixed(1)}
                          readOnly
                          className="number-input"
                        />
                        <button
                          onClick={() => increaseNumber(setNumberValue)}
                          className="number-button"
                        >
                          +
                        </button>
                      </div>
                      0.5 단위
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '10px' }}>
                  그 외 중 <strong>하이볼 및 가벼운 음주는 한 잔 기준으로 1단위로</strong> 설정해 주세요.
                </p>
                <button className="save-button" onClick={handleSave}>
                  내용 저장하기
                </button>
              </>
            )}
          </div>
        )}

        {isModalVisible && (
          <OtherButton
            value={value}
            memo={memo}
            setShowMemoInput={setShowMemoInput}
            showMemoInput={showMemoInput}
            handleMemoChange={handleMemoChange}
            rating={rating}
            setRating={setRating}
            numberValue={numberValue}
            increaseNumber={() => increaseNumber(setNumberValue)}
            decreaseNumber={() => decreaseNumber(setNumberValue)}
            handleSave={handleSaveLocal}
            handleCloseModal={handleCloseModal}
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
            highballNumberValue={highballNumberValue}
            kaoliangNumberValue={kaoliangNumberValue}
          />
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;

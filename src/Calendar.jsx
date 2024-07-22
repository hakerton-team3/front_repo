import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb';

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [mark, setMark] = useState([]); // Assuming this is for marked dates
  const [isSwitchOn, setIsSwitchOn] = useState(false); // Switch state
  const [isInfoVisible, setIsInfoVisible] = useState(false); // Info visibility state
  const [memo, setMemo] = useState(''); // Memo text
  const [rating, setRating] = useState(0); // Condition rating
  const [numberValue, setNumberValue] = useState(0); // Numeric input value
  const [showMemoInput, setShowMemoInput] = useState(false); // Show memo input toggle

  const handleDateChange = (date) => {
    setValue(date);
    setIsInfoVisible(true); // Show additional-info when a date is selected
  };

  const handleMonthChange = (date) => {
    // Logic for month change if needed
  };

  const handleDate = (direction) => {
    // Logic for handling date navigation
  };

  const NextIcon = ({ handleDate }) => (
    <div onClick={() => handleDate('next')} style={{ cursor: 'pointer' }}> {'>'} </div>
  );

  const PreviousIcon = ({ handleDate }) => (
    <div onClick={() => handleDate('prev')} style={{ cursor: 'pointer' }}> {'<'} </div>
  );

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const increaseNumber = () => {
    setNumberValue(prev => Math.min(prev + 0.5, 10)); // Limit max value for example
  };

  const decreaseNumber = () => {
    setNumberValue(prev => Math.max(prev - 0.5, 0)); // Limit min value for example
  };

  const handleSave = () => {
    // Logic to save the data (e.g., send to a server or local storage)
    alert(`Date: ${moment(value).format('YYYY-MM-DD')}, Memo: ${memo}, Rating: ${rating}, Number: ${numberValue}`);
  };

  return (
    <div className="react-calendar-wrapper">
      <div className="calendar-header">
        <div className="header-text">
          <div className="event-text">
            <br />
            김서경 님의<br />
            <strong>예정된 약속은,</strong>
          </div>
          <div className="event-circle"></div>
        </div>
        <div className="event-button">
          오늘 18:00 | 동아리 회식자리
        </div>
      </div>

      <Calendar
        onChange={handleDateChange}
        onDrillDown={handleMonthChange}
        value={value}
        formatDay={(local, date) => moment(date).format("D")}
        formatShortWeekday={(locale, date) => moment(date).format('ddd').toUpperCase()}
        formatMonthYear={(locale, date) => moment(date).format('MMMM YYYY')}
        nextLabel={<NextIcon handleDate={handleDate} />}
        prevLabel={<PreviousIcon handleDate={handleDate} />}
        next2Label={null}
        prev2Label={null}
        calendarType="gregory"
        tileContent={({ date, view }) => {
          const html = [];
          if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
            html.push(<div className="dot" key={date}></div>);
          }
          return (
            <div className="flex justify-center items-center absoluteDiv">
              {html}
            </div>
          );
        }}
      />

      {isInfoVisible && (
        <div className="info-container">
          <div className="top-bar">
            <button className="other-button">그 외</button>
            <div className="beer-soju-text">맥주/소주 각각 체크해 주세요.</div>
            <div className={`switch-container ${isSwitchOn ? 'switch-on' : ''}`} onClick={toggleSwitch}>
              <div className="switch">
                <div className="switch-btn"></div>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <div className="info-left">
              <div>
                <strong>{moment(value).format('YYYY년 M월 D일')}</strong>
              </div>
              <div>
                <button className="memo-button" onClick={() => setShowMemoInput(!showMemoInput)}>
                   약속 메모 | 
                </button>
                {showMemoInput && (
                  <textarea
                    value={memo}
                    onChange={handleMemoChange}
                    placeholder="메모를 입력하세요"
                    rows={3}
                  />
                )}
              </div>
              <div className='condition-box'>
                <strong>오늘의 컨디션 정도</strong>
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map(num => (
                   <div
                    key={num}
                    className={`rating-circle ${rating === num ? 'selected' : ''}`}
                    onClick={() => setRating(num)}
                  ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="info-right">
              <div>
                <strong>숫자 입력</strong>
                <div className="number-container">
                  <button onClick={decreaseNumber} className="number-button">-</button>
                  <input type="text" value={numberValue.toFixed(1)} readOnly className="number-input" />
                  <button onClick={increaseNumber} className="number-button">+</button>
                </div>
              </div>
            </div>
          </div>

          <button className="save-button" onClick={handleSave}>내용 저장하기</button>
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;

import React, { useState } from 'react';
import Calendar from 'react-calendar'; // react-calendar 라이브러리에서 가져온 Calendar
import 'react-calendar/dist/Calendar.css'; // CSS 파일 올바르게 import
import moment from 'moment';
import 'moment/locale/en-gb'; // Import the English locale for moment

// CustomCalendar 컴포넌트
const CustomCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const attendDay = ["2024-07-21", "2024-07-23"]; // 약속 예시

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="react-calendar-wrapper"> {/* 스타일 클래스 이름 변경 */}
      <Calendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        locale="en-GB" // Set the locale to English
        formatShortWeekday={(locale, date) => moment(date).format('ddd').toUpperCase()} // Uppercase weekday names
        tileContent={({ date, view }) => {
          let html = [];
          if (
            view === "month" &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
          ) 
          if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="react-calendar-dot" key={moment(date).format("YYYY-MM-DD")} />);
          }
          return <>{html}</>;
        }}
      />
    </div>
  );
};

export default CustomCalendar;

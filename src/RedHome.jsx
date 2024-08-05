import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sectionred from './Home/Sectionred.jsx';
import Section02 from './Home/section2.jsx';
import Section03red from './Home/section3red.jsx';

const RedHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event) => {
      window.history.pushState(null, "", window.location.href);
      console.log("뒤로 가기 버튼이 클릭됨");
    };

    // 현재 상태를 추가
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div>
      <Sectionred />
      <Section02 />
      <Section03red />
    </div>
  );
};

export default RedHome;

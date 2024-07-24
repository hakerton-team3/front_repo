import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Privacy.css'

const Privacy = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
      };

    return(
        
        <div className="community-container">
      <div className="background-image"></div>
      <div className="foreground-image"></div>
      <div className="content">
        <p style={{ textAlign: 'left', fontSize: '19px', fontWeight: 'bold', margin: '0' }}>김서경 님, 나만의 게시판입니다.</p>
        <hr />
        <p>
          누군가에게 말하기 망설여지거나 말 못할 고민들로 인해 한 음주.<br />
          이젠 주달이에게 털어놓는 건 어떨까요?<br />
          생각의 정리를 도와드릴 수 있게 최선을 다할게요.
        </p>        
      </div>     
      <div className="buttons">   
          <button className="button" onClick={() => navigateTo('/community')}>게시판 목록</button>
    </div>
    </div>
    
    );
};

export default Privacy;
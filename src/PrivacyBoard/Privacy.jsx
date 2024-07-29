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
      <div className="main-text">   
          <p>나를 되돌아보는 것도 중요해</p>
          <div className='questionMarkImg'></div>
    </div>
    <div className="search-container">
    <input type="text" className="search-input" placeholder="'약속'에 관련된 혼잣말" />
    <div className="search-icon"></div>
    </div>
    <div className="underline"></div>
    <div className="container">
    <div className="borderedText">
      <p>크러시 맥주랑 잘 맞는 듯</p>
      <div className="smallText">8월 9일 12:10</div>
      <div className="closeImg"></div>
    </div>
    <div className="borderedText">
      <p>내일 약속 어쩌지</p>
      <div className="smallText">8월 9일 12:10</div>
      <div className="closeImg"></div>
    </div>
    <div className="borderedText">
      <p>숙취해소제 사서 가기</p>
      <div className="smallText">8월 9일 12:10</div>
      <div className="closeImg"></div>
    </div>
    <div className="borderedText">
      <p>주량 다시 확인해봐야겠는데.................................긴메모하면 여러줄로 내려감..............................................</p>
      <div className="smallText">8월 9일 12:10</div>
      <div className="closeImg"></div>
    </div>
    </div>
    <div className="underline2"></div>
    </div>
    );
};

export default Privacy;
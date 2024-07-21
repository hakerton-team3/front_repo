import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Community.css'; // 스타일 파일 import

function Community() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="community-container">
      <div className="background-image"></div>
      <div className="foreground-image"></div>
      <div className="content">
        <p style={{ textAlign: 'left', fontSize: '19px', fontWeight: 'bold', margin: '0' }}>주량마스터, 김서경 님</p>
        <hr />
        <p>
          누군가에게 말하기 망설여지거나 말 못할 고민들로 인해 한 음주.<br />
          이젠 주달이에게 털어놓는 건 어떨까요?<br />
          생각의 정리를 도와드릴 수 있게 최선을 다할게요.
        </p>
      </div>
      <div className="buttons">
        <div className="text-section">
          <p>모든 사람과 함께 공유해요.</p>
          <button className="button" onClick={() => navigateTo('/history')}>흑역사 게시판</button>
          <p>술비티아이 | 주량마스터 커뮤니티</p>
          <button className="button">술비티아이 게시판</button>
        </div>
        <div className="custom-hr" style={{ borderTop: '1px solid #E7E7E7', width: '320px', margin: '10px 0' }}></div>
        <div className="text-section">
          <p>프라이버시 게시판</p>
          <button className="button">나만의 게시판</button>
          <button className="button">술은 먹어도, 까먹진 말고.</button>
        </div>
      </div>
      <div className="notice">
        <p>
          익명 커뮤니티로서, 타 사용자와의 분쟁은 삼가주시고<br />
          게시글은 24시간 기준으로 변경되고, 이후에는 삭제가 가능합니다.
        </p>
      </div>
    </div>
  );
}

export default Community;

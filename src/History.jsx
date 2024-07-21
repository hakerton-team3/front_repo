import React, { useState } from 'react';
import './History.css';

function History() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      setPosts([...posts, input]);
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1 className="header">흑역사 게시판</h1>
      <div>
        <h2 className="subheader">댓글</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="subheader">작성하기 | 익명의 주달이</h2>
        <textarea
          value={input}
          onChange={handleChange}
        ></textarea>
        <br />
        <button onClick={handleSubmit}>등록하기</button>
      </div>
      
    </div>
  );
}

export default History;

import React, { useState } from 'react';
import moment from 'moment'; // Add this import if you use moment
import OtherButton from './OtherButton'; // Ensure OtherButton component is correctly imported
import './Soju.css';

const Soju = ({ isSwitchOn, toggleSwitch, value, memo, handleMemoChange }) => {
  const [showMemoInput, setShowMemoInput] = useState(false);
  const [rating, setRating] = useState(0);
  const [numberValue, setNumberValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOtherButtonClick = () => {
    // Define the functionality here
    setIsModalVisible(true);
  };

  const decreaseNumber = () => {
    setNumberValue(prevValue => Math.max(0, prevValue - 0.5));
  };

  const increaseNumber = () => {
    setNumberValue(prevValue => prevValue + 0.5);
  };

  const handleSave = () => {
    // Define the functionality here
    console.log('Save button clicked');
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="Soju-top-bar">
        <div className="soju-text"> 소주 체크해 주세요.</div>
        <div className={`switch-container ${isSwitchOn ? 'switch-on' : ''}`} onClick={toggleSwitch}>
          <div className="switch">
            <div className="switch-btn"></div>
          </div>
        </div>
        <button className="other-button" onClick={handleOtherButtonClick}>그 외</button>
      </div>
      <div className="Soju-info-box">
        <div className="Soju-info-left">
          <div>
            <strong className="Soju-left-align">{moment(value).format('YYYY년 M월 D일')}</strong>
          </div>
          <div className="Soju-memo-button" onClick={() => setShowMemoInput(true)}>
            약속 메모 |&nbsp;
            {showMemoInput ? (
              <input
                type="text"
                value={memo}
                onChange={handleMemoChange}
                placeholder="메모 입력창"
                className="Soju-memo-input"
                autoFocus
                onBlur={() => setShowMemoInput(false)}
              />
            ) : (
              memo
            )}
            {showMemoInput && (
              <img 
                className="Soju-pencil" 
                src="/src/image/pencil.png" 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the div click event
                  setShowMemoInput(false);
                }}
              />
            )}
          </div>
          <div className='Soju-condition-box'>
            <strong style={{fontSize:'13px', marginBottom: '10px', marginLeft: '5px'}}>오늘의 컨디션 정도</strong>
            <div className="Soju-rating-container">
              {[{num: 1, label: '최하'}, {num: 2, label: '2'}, {num: 3, label: '3'}, {num: 4, label: '4'}, {num: 5, label: '최상'}].map(item => (
                <div key={item.num} className="Soju-rating-wrapper">
                  <div
                    className={`Soju-rating-circle ${rating === item.num ? 'selected' : ''}`}
                    onClick={() => setRating(item.num)}
                  ></div>
                  <div className="Soju-rating-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Soju-info-right">
          <div className="Soju-bottle-image"></div>
          <div style={{fontSize:'12px', marginLeft:'5%'}}>
            음주량
            <div className="Soju-number-container">
              <button onClick={decreaseNumber} className="Soju-number-button">-</button>
              <input type="text" value={numberValue.toFixed(1)} readOnly className="Soju-number-input" />
              <button onClick={increaseNumber} className="Soju-number-button">+</button>
            </div>
            0.5 단위
          </div>
        </div>
      </div>
      <p style={{fontSize:'10px'}}>그 외 중 <strong>하이볼 및 가벼운 음주'는 한 잔 기준으로 1단위로</strong>' 설정해 주세요.</p>
      <button className="Soju-save-button" onClick={handleSave}>내용 저장하기</button>

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
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
          handleSave={handleSave}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Soju;

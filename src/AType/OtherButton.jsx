import React, { useState } from 'react';
import moment from 'moment';

const OtherButton = ({ value, memo, setShowMemoInput, showMemoInput, handleMemoChange, handleSave, handleCloseModal }) => {
  // Local state for handling modal input
  const [localMemo, setLocalMemo] = useState(memo);
  const [selectedDrink, setSelectedDrink] = useState('light'); // Default to 'light' or 'strong'
  const [ratingForLight, setRatingForLight] = useState(0); // Rating for "하이볼/가벼운 음주"
  const [ratingForStrong, setRatingForStrong] = useState(0); // Rating for "고량주/고도수 음주"
  const [numberValueForLight, setNumberValueForLight] = useState(0); // Number for "하이볼/가벼운 음주"
  const [numberValueForStrong, setNumberValueForStrong] = useState(0); // Number for "고량주/고도수 음주"
  const [showLocalMemoInput, setShowLocalMemoInput] = useState(showMemoInput);

  const handleLocalMemoChange = (e) => {
    setLocalMemo(e.target.value);
    handleMemoChange(e); // If you need to update the parent component's state as well
  };

  const increaseNumber = () => {
    if (selectedDrink === 'light') {
      setNumberValueForLight(prevValue => Math.min(prevValue + 0.5, 10)); // Assuming 10 is the max value
    } else if (selectedDrink === 'strong') {
      setNumberValueForStrong(prevValue => Math.min(prevValue + 0.5, 10)); // Assuming 10 is the max value
    }
  };

  const decreaseNumber = () => {
    if (selectedDrink === 'light') {
      setNumberValueForLight(prevValue => Math.max(prevValue - 0.5, 0)); // Assuming 0 is the min value
    } else if (selectedDrink === 'strong') {
      setNumberValueForStrong(prevValue => Math.max(prevValue - 0.5, 0)); // Assuming 0 is the min value
    }
  };

  const handleSaveLocal = () => {
    handleSave(); // Save functionality
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={handleCloseModal}>X</button>
        <div className="modal-body">
          <div className="modal-box">
            <div className="modal-top">
              <div className="modal-left">
                <div>
                  <strong className="modal-left-align">{moment(value).format('YYYY년 M월 D일')}</strong>
                </div>
                <div className="Soju-memo-button" onClick={() => setShowLocalMemoInput(true)}>
                  약속 메모 |&nbsp;
                  {showLocalMemoInput ? (
                    <input
                      type="text"
                      value={localMemo}
                      onChange={handleLocalMemoChange}
                      placeholder="메모 입력창"
                      className="Soju-memo-input"
                      autoFocus
                      onBlur={() => setShowLocalMemoInput(false)}
                    />
                  ) : (
                    localMemo
                  )}
                  {showLocalMemoInput && (
                    <img 
                      className="Soju-pencil" 
                      src="/src/image/pencil.png" 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the div click event
                        setShowLocalMemoInput(false);
                      }}
                    />
                  )}
                </div>
                <div className="modal-condition-box">
                  <strong style={{fontSize:'13px', marginBottom: '10px', marginLeft: '5px'}}>오늘의 컨디션 정도</strong>
                  <div className="modal-rating-container">
                    {[{ num: 1, label: '최하' }, { num: 2, label: '2' }, { num: 3, label: '3' }, { num: 4, label: '4' }, { num: 5, label: '최상' }].map(item => (
                      <div key={item.num} className="modal-rating-wrapper">
                        <div
                          className={`modal-rating-circle ${selectedDrink === 'light' && ratingForLight === item.num ? 'selected' : ''} ${selectedDrink === 'strong' && ratingForStrong === item.num ? 'selected' : ''}`}
                          onClick={() => {
                            if (selectedDrink === 'light') {
                              setRatingForLight(item.num);
                            } else if (selectedDrink === 'strong') {
                              setRatingForStrong(item.num);
                            }
                          }}
                        ></div>
                        <div className="modal-rating-label">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-info-right">
                <div className="modal-bottle-image"></div>
                <div style={{fontSize:'12px', marginLeft:'5%'}}>
                  음주량
                  <div className="modal-number-container">
                    <button onClick={decreaseNumber} className="modal-number-button">-</button>
                    <input type="text" value={selectedDrink === 'light' ? numberValueForLight.toFixed(1) : numberValueForStrong.toFixed(1)} readOnly className="modal-number-input" />
                    <button onClick={increaseNumber} className="modal-number-button">+</button>
                  </div>
                  0.5 단위
                </div>
              </div>
            </div>
            <div className="modal-bottom">
              <button 
                className={`modal-drink-button ${selectedDrink === 'light' ? 'selected' : ''}`}
                onClick={() => setSelectedDrink('light')}
              >
                하이볼/가벼운 음주
              </button>
              <button 
                className={`modal-drink-button ${selectedDrink === 'strong' ? 'selected' : ''}`}
                onClick={() => setSelectedDrink('strong')}
              >
                고량주/고도수 음주
              </button>
            </div>
          </div>
          <button className="modal-save-button" onClick={handleSaveLocal}>내용 저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default OtherButton;

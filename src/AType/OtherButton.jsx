import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ModalBottle from '../image/기타술병.png';

const OtherButton = ({ 
  value, 
  memo, 
  setShowMemoInput, 
  showMemoInput, 
  handleMemoChange, 
  handleSave, 
  handleCloseModal, 
  rating, 
  setRating, 
  numberValue, 
  increaseNumber, 
  decreaseNumber, 
  selectedDrink, 
  setSelectedDrink, 
  highballNumberValue, 
  kaoliangNumberValue,
  scheduleData 
}) => {
  const [highballTemp, setHighballTemp] = useState(0);
  const [kaoliangTemp, setKaoliangTemp] = useState(0);

  useEffect(() => {
    if (scheduleData) {
      if (scheduleData.highballAlcohol) {
        setHighballTemp(scheduleData.highballAlcohol);
      }
      if (scheduleData.kaoliangAlcohol) {
        setKaoliangTemp(scheduleData.kaoliangAlcohol);
      }
    } else {
      if (highballNumberValue) {
        setHighballTemp(highballNumberValue);
      }
      if (kaoliangNumberValue) {
        setKaoliangTemp(kaoliangNumberValue);
      }
    }
  }, [scheduleData, highballNumberValue, kaoliangNumberValue]);

  const increaseTempNumber = () => {
    if (selectedDrink === 'light') {
      setHighballTemp(prev => Math.min(prev + 0.5, 10));
    } else {
      setKaoliangTemp(prev => Math.min(prev + 0.5, 10));
    }
  };

  const decreaseTempNumber = () => {
    if (selectedDrink === 'light') {
      setHighballTemp(prev => Math.max(prev - 0.5, 0));
    } else {
      setKaoliangTemp(prev => Math.max(prev - 0.5, 0));
    }
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
                <div className="Soju-memo-button" onClick={() => setShowMemoInput(true)}>
                  약속 메모 |&nbsp;
                  <input
                    type="text"
                    value={memo}
                    onChange={handleMemoChange}
                    placeholder="메모 입력창"
                    className="Soju-memo-input"
                  />
                </div>
                <div className="modal-condition-box">
                  <strong style={{fontSize:'13px', marginBottom: '10px', marginLeft: '5px'}}>오늘의 컨디션 정도</strong>
                  <div className="modal-rating-container">
                    {[{ num: 1, label: '최하' }, { num: 2, label: '2' }, { num: 3, label: '3' }, { num: 4, label: '4' }, { num: 5, label: '최상' }].map(item => (
                      <div key={item.num} className="modal-rating-wrapper">
                        <div
                          className={`modal-rating-circle ${rating === item.num ? 'selected' : ''}`}
                          onClick={() => setRating(item.num)}
                        ></div>
                        <div className="modal-rating-label">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-info-right">
                <img className="modal-bottle-image" src={ModalBottle}></img>
                <div style={{fontSize:'12px', marginLeft:'5%'}}>
                  음주량
                  {selectedDrink === 'light' ? (
                    <div className="modal-number-container">
                      <button onClick={decreaseTempNumber} className="modal-number-button">-</button>
                      <input type="text" value={highballTemp.toFixed(1)} readOnly className="modal-number-input" />
                      <button onClick={increaseTempNumber} className="modal-number-button">+</button>
                    </div>
                  ) : (
                    <div className="modal-number-container">
                      <button onClick={decreaseTempNumber} className="modal-number-button">-</button>
                      <input type="text" value={kaoliangTemp.toFixed(1)} readOnly className="modal-number-input" />
                      <button onClick={increaseTempNumber} className="modal-number-button">+</button>
                    </div>
                  )}
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
          <button className="modal-save-button" onClick={() => handleSave(highballTemp, kaoliangTemp)}>내용 저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default OtherButton;

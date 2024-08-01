import React from 'react';
import * as S from './test.styled';

const Question = ({ questionText, options, selectedOption, onAnswerChange }) => {
  return (
    <S.Container3>
      <div dangerouslySetInnerHTML={{ __html: questionText }} />
      {options.map((option, index) => (
        <S.BubbleContainer3 
          key={index} 
          onClick={() => onAnswerChange(index)}
          selected={selectedOption === index} // 선택 여부를 전달
        >
          <S.BubbleContainerText3>
            {option}
          </S.BubbleContainerText3>
        </S.BubbleContainer3>
      ))}
    </S.Container3>
  );
};

export default Question;

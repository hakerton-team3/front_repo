// Question.js
import React from 'react';
import * as S from './test.styled';

const Question = ({ questionText, options }) => {
  return (
    <S.Container3>
      <div dangerouslySetInnerHTML={{ __html: questionText }} />
      {options.map((option, index) => (
        <S.BubbleContainer3 key={index}>
          <S.BubbleContainertext3>
            {option}
          </S.BubbleContainertext3>
        </S.BubbleContainer3>
      ))}
    </S.Container3>
  );
};

export default Question;

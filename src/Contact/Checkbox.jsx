import React from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: ${props => (props.checked ? '#6e6e6e' : '#e7e7e7')};
  border-radius: 3px;
  transition: all 150ms;
  position: absolute;
  left: 354px;
  top: 21px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${props => props.checked && `&:after {
    content: '✔';
    position: absolute;
    left: 2px;
    top: -1px;
    font-size: 12px;
    color: white;
  }`}
`;

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const Checkbox = ({ className, checked, onChange }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={({ target: { checked } }) => onChange(checked)} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

export default Checkbox;

// Section3.styled.js
import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #FFFFFF;
  padding: 20px;
  text-align: center;
  box-sizing: border-box; 
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const EmphasizedText = styled.span`
  font-weight: bold;
`;

export const Button = styled.div`
  background-color: #FFCE4F;
  border-radius: 10px; /* Adjusted to a smaller radius */
  padding: 10px 20px;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  color: black;
  width: 60%; /* Adjusted to fit the content */
  margin: 0 auto; /* Center the button horizontally */
  margin-top: 10%;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

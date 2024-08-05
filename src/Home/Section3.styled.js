// Section3.styled.js
import styled from 'styled-components';
import backgroundImage from '../image/ramen.png';

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
  width: 100%;
  background-color: #FFFFFF;
  margin-top: 20%;
  text-align: center;
  box-sizing: border-box; 
   
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
  
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  line-height: 1.5;
  white-space: pre-wrap;
  color: black;
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

export const Button2 = styled.div`
  background-color: white;
  border-radius: 10px; /* Adjusted to a smaller radius */
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 고쳐짐: 0.25로 수정 */
  padding: 10px 20px;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  color: black;
  width: 60%; /* Adjusted to fit the content */
  margin: 0 auto; /* Center the button horizontally */
  margin-top: 5%;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;


export const Image2 = styled.img`
  width: 100px;
  height: 100px; 
`;

export const RecommendationContainer = styled.div`
   width: 100%;
 
  background: 
    linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;


export const EmphasizedText = styled.span`
  font-weight: bold;
  color: black;
`;

export const Recommandtitle = styled.div`
  font-size: 60px;
  color: black;
  text-align: center;

  margin-top: 10px;
  font-family: 'LotteriaChab';
`;
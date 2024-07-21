// Section2.styled.js
import styled, { createGlobalStyle } from 'styled-components';

// Global style to include the custom font
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'chab';
    src: url('src/fonts/chab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;

// Main container style
export const MainContainer = styled.div`
  width: 100%;
  background-color: #FFCE4F;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10%; /* Add this line to remove bottom padding */
  margin-bottom: 0; /* Add this line to remove bottom margin */
`;

// Title style
export const Title = styled.div`
  margin-top: 5%;
  font-size: 12px;
`;

// Wrapper for horizontal scrolling
export const ScrollWrapper = styled.div`
  width: 90%;
  overflow-x: auto;
  display: flex;
  margin-top: 5%;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

// Card container style
export const CardContainer = styled.div`
  min-width: 160px;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10%;
  margin-right: 5%; /* Space between cards */
  position: relative; /* Needed for the hole */
`;

export const ContainererText = styled.h1`
  font-family: 'chab';
  color: black;
  font-size: 38px;
  text-align: left; /* Align text to the left */
  padding-left: 10%; /* Add padding to the left */
  
  width: 100%; /* Make sure the text takes the full width of the container */
`;

export const LongText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Hole = styled.div`
  width: 20px;
  height: 20px;
  background-color: #FFCE4F;
  border: 2px white ;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
`;

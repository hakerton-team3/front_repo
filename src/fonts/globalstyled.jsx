// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LotteriaChab';
    src: url('./fonts/LotteriaChab.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'LotteriaChab', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

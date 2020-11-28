import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: 'Open Sans Condensed';
    font-family: 'Montserrat';
    max-width: 1700px;
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    margin: 0 auto;
  }

  #root {
    width: 100%;
    box-shadow: 0 0.0625rem 0.25rem 0 rgba(61,66,80,.18);
  }

  a {
    text-decoration: none;
    color: black;
  }

  .app:nth-child(1) {
    background-color: white;
  }

  .header-container {
    z-index: 100;

  }
`;
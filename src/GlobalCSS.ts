import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,*::before,*::after, button {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
  :root {
    --primaryDark: #222224;
    --secondaryDark: #292A2B;
    --tirnaryDark: #222324;
    --headerBackground: #1E1E1F;
    --buttonColor: #E02735;
    --fontColor: #F7F7F7;
    --secondaryFontColor: #cfcfcf;
    --placeholderColor: #666666;
  }
 
  html {
    font-size: 62.5%;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: var(--primaryDark);
    font-size: 1.6rem;
    color: white;
  }
`;

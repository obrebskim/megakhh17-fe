import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --primaryDark: #222224;
    --secondaryDark: #292A2B;
    --headerBackground: #1E1E1F;
    --buttonColor: #E02735;
    --fontColor: #F7F7F7;
    --secondaryFontColor: #cfcfcf;
    --placeholderColor: #666666;
  }

  html {
    font-family: Catamaran, sans-serif;
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

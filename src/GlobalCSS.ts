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
    --buttonColor: #E02735;
    --fontColor: #

  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: var(--primaryDark);
    color: white;
  }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --primaryColor: #333;
  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: var(--primaryColor);
    color: white;
  }
`;

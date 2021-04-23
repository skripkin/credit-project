import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyles;
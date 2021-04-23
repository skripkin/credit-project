import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import GlobalFonts from "./globals/fonts";
import GlobalStyles from "./globals/styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
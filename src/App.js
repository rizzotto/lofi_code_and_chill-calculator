import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Calculator />
    </div>
  );
}

export default App;

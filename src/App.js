import React from 'react';
import './App.css';
import { GlobalStyles } from './context/ThemeContext.js';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <h1>Hello, World!</h1>
  </div>
);

export default App;

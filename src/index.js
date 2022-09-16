import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import reportWebVitals from './reportWebVitals';

import Servers from './Components/Servers'
import Friends from './Components/Friends'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="main-container">
    <Servers />
    <Friends />
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

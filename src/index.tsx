import React from 'react';
import ReactDOM from 'react-dom';
import {CardMakerApp} from './CardMaker/CardMaker';
import {TestCardMaker} from './CardMakerTestData'

ReactDOM.render(
  <React.StrictMode>
    <CardMakerApp cardMaker={TestCardMaker}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your CardMaker, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Components/Game' // 추가
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root')); // 수정
registerServiceWorker();

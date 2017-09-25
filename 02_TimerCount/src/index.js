import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Timer' // 추가
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timer />, document.getElementById('root')); // 수정
registerServiceWorker();

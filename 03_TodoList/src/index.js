import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp from './Components/TodoList' // 추가
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('root')); // 수정
registerServiceWorker();

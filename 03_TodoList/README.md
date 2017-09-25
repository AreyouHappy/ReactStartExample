
# 타이머 이용하여 카운트 하기

###컴포넌트
Component 폴더 생성
TodoList.js 파일 만들기


### 중요.
e.preventDefault(); // 이벤트  전달을 중단
```
this.setState((prevState) => ({
  items: prevState.items.concat (newItem),
  text: ''
}));
```
**concat** 이어 붙이기

###index.js

import TodoApp from './Components/TodoList' // 추가

```
ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker(); // 수정
```


##구조

`TodoApp` => `TodoList`


> TodoApp
>> TodoList
>>> List, Input, Button

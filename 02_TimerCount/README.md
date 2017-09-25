
# 타이머 이용하여 카운트 하기

###컴포넌트
 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

###Timer
timer.js 파일을 만들어 Timer 컴포넌트를 생성

###index.js

import Timer from './Timer' // 추가

```
ReactDOM.render(<Timer />, document.getElementById('root'));
registerServiceWorker(); // 수정
```

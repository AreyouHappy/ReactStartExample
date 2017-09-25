
# 사각형 자동카운트 ( 미완성 )

###컴포넌트
Component 폴더 생성
Board Game, Square.js 파일 만들기


### 중요.

```
Board에서 Square 그려주는 부분

renderSquare(i) {
  return <Square number={i} />;
}
```
```
Square가 number인수를 받음
this.state = {number: this.props.number};
```



###index.js

import Game from './Components/Game' // 추가

```
ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker(); // 수정
```


##구조

`Game` => `Board` => `Square`


> Game
>> Board
>>> Square
>>>>timer 및 숫자 표시

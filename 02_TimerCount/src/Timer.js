import React, { Component } from 'react'; // import 부분

class Timer extends React.Component {

  //생성자
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
    // 현재상태
  }


  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

   //컴포넌트가 생성되면 작동
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 화면에 그려주는 부분
  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}
export default Timer;     // 내보내기

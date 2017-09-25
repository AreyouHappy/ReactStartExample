import React, { Component } from 'react'; // import 부분


class Square extends React.Component {

  //생성자
  constructor(props) {
    super(props);
    // 받은 number 값으로 초기화
    this.state = {number: this.props.number};
    this.click=this.click.bind(this);

    // 현재상태
  }

  click(){
    // 1번 방법
    // this.setState((current) => ({
    //   number: current.number + 1
    // }));
    // 2번방법
    this.state={...this.state , number:this.state.number+1}
  }

  // 1초마다 호출
  tick() {

    this.setState((current) => ({
      number: current.number + 1
    }));

  }

   //컴포넌트가 생성되면 작동
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <button className="square" onClick={this.click}>
        {this.state.number}         {/* 숫자 표시 */}
      </button>
    );
  }
}
export default Square

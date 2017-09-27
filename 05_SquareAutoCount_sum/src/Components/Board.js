import React, { Component } from 'react'; // import 부분
import Square from './Square'
import * as data from '../data.js'


class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        sum : 1,
        square : []
      } ;
}
  renderSquare(i) {
    if(i==0) data.init(); // 데이터 초기화
    var s=<Square number={i} onChange={this.handleChange} value={this.handleChange} />;
     return s;

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }



  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  // 데이터 설정
  tick(){
    this.setState((current) => ({
      sum: data.sum
    }));
  }

  render() {
    console.log(this.state.square);
    return (
      <div>
        <div className="status">{this.state.sum}</div>
        <div className="board-row">
          {data.sum}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


export default Board

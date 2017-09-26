import React, { Component } from 'react'; // import 부분
import Square from './Square'

class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        sum : 1,
        square : []
      } ;
}
  renderSquare(i) {
     return  <Square number={i} />;

  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  tick(){

  }

  render() {
    return (
      <div>
        <div className="status">{this.state.sum}</div>
        <div className="board-row">
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

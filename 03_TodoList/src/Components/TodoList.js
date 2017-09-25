import React, { Component } from 'react'; // import 부분


// 앱을 전체적으로 그려주는 부분
class TodoApp extends React.Component {

  //생성자
  constructor(props) {
    super(props);
    // 바인딩
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // 현재 초기상태지정
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>  {/* onSubmit : 클릭시 */}
          <input onChange={this.handleChange} value={this.state.text} />   {/* onChange 변할때마다 */}

          {/* items.length  아이템 길이 */}
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  // 이벤트
  handleChange(e) {
    this.setState({text: e.target.value});
  }

  // 버튼클릭 이벤트
  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}



// 리스트를 뿌려 주는 부분
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp

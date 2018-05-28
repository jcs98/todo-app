import React, { Component } from 'react';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: {}
    }
  }

  deleteTodo(title) {
    this.props.deleteTodo(title);
  }

  toggleTodo(title) {
    this.props.toggleTodo(title);
  }

  render() {
    return (
      <li className="Todo">
        <input type="checkbox" onChange={this.toggleTodo.bind(this, this.props.todo.title)} checked={this.props.checked}/>
        <strong>{this.props.todo.title}</strong>: 
        {this.props.todo.desc} 
        <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.title)}>
          <font color="red">x</font>
        </a>
      </li>
    );
  }
}

export default Todo;

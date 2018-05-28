import React, { Component } from 'react';

class Todo extends Component {

  deleteTodo(title) {
    this.props.deleteTodo(title);
  }

  render() {
    return (
      <li className="Todo">
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

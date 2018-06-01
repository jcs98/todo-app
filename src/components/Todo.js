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
        <input type="checkbox" onChange={this.toggleTodo.bind(this, this.props.todo.title)} checked={this.props.checked} />
        <span onClick={this.toggleTodo.bind(this, this.props.todo.title)} style={{textDecoration: this.props.checked ? 'line-through' : 'none'}}>{this.props.todo.title + '      '}</span> 
        <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.title)} style={{color:'red', textDecoration: 'none'}}>x</a>
      </li>
    );
  }
}

export default Todo;

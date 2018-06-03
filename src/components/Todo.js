import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {

  render() {
    return (
      <li className="Todo">
        <input type="checkbox" onChange={this.props.toggleTodo} checked={this.props.todo.completed} />
        <span onClick={this.props.toggleTodo} style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>{this.props.todo.title + '      '}</span> 
        <a href="#" onClick={this.props.deleteTodo} style={{color:'red', textDecoration: 'none'}}>x</a>
      </li>
    );
  }
}

export default connect()(Todo);

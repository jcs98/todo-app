import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {

  render() {
    return (
      <li className="Todo">
        {/* <input type="checkbox" onChange={this.props.toggleTodo()} checked={this.props.checked} /> */}
        <span onClick={this.props.onClick} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.todo.title + '      '}</span> 
        <a href="#" style={{color:'red', textDecoration: 'none'}}>x</a>
      </li>
    );
  }
}

export default connect()(Todo);

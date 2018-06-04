import React, { Component } from 'react'

export default class Home extends Component {
  render() {

    let todolists;
    if (this.props.todolists) {
      todolists = this.props.todolists.map(todolist => {
        let pendingTodoCount = 0;
        todolist.todos.forEach(todo => {
          if(!todo.completed) pendingTodoCount++;
        });
        return (
          <li>
          <span style={{color:'black', fontSize:'32px'}}>{todolist.name + "      "} </span>
          <span style={{color:'blue',}}>All: {todolist.todos.length} </span>
          <span style={{color:'red',}}>Pending: {pendingTodoCount} </span>
          <span style={{color:'green',}}>Completed: {todolist.todos.length-pendingTodoCount}</span>
          </li>
        );
      });
    }

    return (
      <div>
        <ul>
          {todolists}
        </ul>
      </div>
    )
  }
}

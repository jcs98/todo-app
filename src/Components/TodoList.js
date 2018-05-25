import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    let todos;
    if (this.props.todolist.todos) {
      todos = this.props.todolist.todos.map(todo => {
        //console.log(todo);
        return (
          <Todo key={todo.title} todo={todo} />
        );
      });
    }

    return (
      <div className="TodoList">
        {todos}
      </div>
    );
  }
}

export default TodoList;

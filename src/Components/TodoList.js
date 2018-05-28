import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoList extends Component {

  handleAddTodo(todo){
    // console.log(todo);
    let todos = this.props.todolist.todos;
    todos.push(todo);
    this.props.updateList(this.props.todolist.name, todos);
  }

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
        <h3>{this.props.todolist.name}</h3>
        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        {todos}
        <hr/>
      </div>
    );
  }
}

export default TodoList;

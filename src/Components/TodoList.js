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

  handleDeleteTodo(title){
    // console.log(todo);
    let todos = this.props.todolist.todos;
    let index = todos.findIndex(x => x.title === title);
    todos.splice(index, 1);
    this.props.updateList(this.props.todolist.name, todos);
  }

  handleToggleTodo(title){
    // console.log(todo);
    let todos = this.props.todolist.todos;
    todos.forEach(todo => {
      if(todo.title === title){
        if(todo.completed)
          todo.completed = false;
        else
          todo.completed = true;
      }
    });
    this.props.updateList(this.props.todolist.name, todos);
  }

  deleteList(name) {
    this.props.deleteList(name);
  }

  render() {
    let todos;
    if (this.props.todolist.todos) {
      todos = this.props.todolist.todos.map(todo => {
        //console.log(todo);
        let checked = "";
        if(todo.completed)
          checked = "checked";
        return (
          <Todo key={todo.title} todo={todo} deleteTodo={this.handleDeleteTodo.bind(this)} toggleTodo={this.handleToggleTodo.bind(this)} checked={checked}/>
        );
      });
    }

    return (
      <div className="TodoList">
        <h3>
          {this.props.todolist.name + "     "}
          <a href="#" onClick={this.deleteList.bind(this, this.props.todolist.name)} style={{color:'red', textDecoration: 'none'}}>x</a>
        </h3>

        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        {todos}
        <hr/>
      </div>
    );
  }
}

export default TodoList;

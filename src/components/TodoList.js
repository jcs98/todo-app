import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { toggleTodo } from '../actions';


class TodoList extends Component {

  render() {
    let todos;
    if (this.props.todolist.todos) {
      todos = this.props.todolist.todos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} toggleTodo={()=>this.props.toggleTodo(todo.id, this.props.todolist.name)}/>
        );
      });
    }

    return (
      <div className="TodoList">
        <h3>
          {this.props.todolist.name + "     "}
          <a href="#" style={{color:'red', textDecoration: 'none'}}>x</a>
        </h3>

        <AddTodo addTodo={(title)=>this.props.addTodo(title, this.props.todolist.name)}/>
        {todos}
        <hr/>
      </div>
    );
  }
}

export default connect()(TodoList);

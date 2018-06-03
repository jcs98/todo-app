import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddList from './components/AddList';
import TodoFilter from './components/TodoFilter';

import { connect } from 'react-redux';
import { addTodolist, deleteTodolist, toggleTodo, addTodo, deleteTodo, filterTodos } from './actions'

import './App.css';


class App extends Component {

  render() {

    let todolists;
    if(this.props.todolists) {
      todolists = this.props.todolists.map(todolist => {
        return (
          <TodoList 
          key={todolist.name} todolist={todolist} 
          toggleTodo={this.props.toggleTodo} 
          addTodo={this.props.addTodo} deleteTodo = {this.props.deleteTodo}
          deleteTodolist={this.props.deleteTodolist}
          currentFilter={this.props.currentFilter}/>
        );
      });
    }

    return (
        <div className="App">
          <h1>ToDo App</h1>
          <AddList addTodolist={this.props.addTodolist}/>
          <hr/>
          <TodoFilter filterTodos={this.props.filterTodos}/>
          <hr/>
          {todolists}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todolists: state.todos,
  currentFilter: state.filter
});

const mapDispatchToProps = dispatch => ({
  addTodolist: name => dispatch(addTodolist(name)),
  deleteTodolist: name => dispatch(deleteTodolist(name)),
  toggleTodo: (id, listName) => dispatch(toggleTodo(id, listName)),
  addTodo: (title, listName) => dispatch(addTodo(title, listName)),
  deleteTodo: (id, listName) => dispatch(deleteTodo(id, listName)),
  filterTodos: (currentFilter) => dispatch(filterTodos(currentFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
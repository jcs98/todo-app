import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddList from './components/AddList';

import { connect } from 'react-redux';
import { addTodolist, toggleTodo } from './actions'

import './App.css';


class App extends Component {

  render() {

    let todolists;
    if(this.props.todolists) {
      todolists = this.props.todolists.map(todolist => {
        return (
          <TodoList key={todolist.name} todolist={todolist} toggleTodo = {this.props.toggleTodo}/>
        );
      });
    }

    return (
        <div className="App">
          <h1>ToDo App</h1>
          <AddList addTodolist={this.props.addTodolist}/>
          <hr/>
          {todolists}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todolists: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodolist: name => dispatch(addTodolist(name)),
  toggleTodo: (id, listName) => dispatch(toggleTodo(id, listName))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
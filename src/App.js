import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddList from './components/AddList';
import TodoFilter from './components/TodoFilter';
import Home from './components/Home';

import { connect } from 'react-redux';
import { addTodolist, deleteTodolist, toggleTodo, addTodo, deleteTodo, filterTodos } from './actions'

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';


class App extends Component {

  render() {

    let todolists;
    if (this.props.todolists) {
      todolists = this.props.todolists.map(todolist => {
        return (
          <TodoList
            key={todolist.name} todolist={todolist}
            toggleTodo={this.props.toggleTodo}
            addTodo={this.props.addTodo} deleteTodo={this.props.deleteTodo}
            deleteTodolist={this.props.deleteTodolist}
            currentFilter={this.props.currentFilter} />
        );
      });
    }

    return (
      <Router>
        <div className="App">

          <Route path="/" exact={true} render={() => {
            return (
              <div>
                <h1>ToDo App</h1>
                <AddList addTodolist={this.props.addTodolist} />
                <Link to="/all-lists">All Lists</Link>
                <Home todolists={this.props.todolists} />
                <hr />
              </div>);
          }} />

          <Route path="/all-lists" render={() => {
            return (
              <div>
                <TodoFilter filterTodos={this.props.filterTodos} />
                <hr />
                {todolists}
              </div>
            );
          }} />

          <Route path="/todolist/:name" render={({ match }) => {
            console.log(match.params.name);
            let todolist = this.props.todolists.filter(todolist => todolist.name === match.params.name)[0];
            return (
              <div>
                <TodoFilter filterTodos={this.props.filterTodos} />
                <hr />
                <TodoList
                  key={todolist.name} todolist={todolist}
                  toggleTodo={this.props.toggleTodo}
                  addTodo={this.props.addTodo} deleteTodo={this.props.deleteTodo}
                  deleteTodolist={this.props.deleteTodolist}
                  currentFilter={this.props.currentFilter} />
              </div>
            );
          }} />

        </div>
      </Router>
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
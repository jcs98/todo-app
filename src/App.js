import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddList from './components/AddList';

import { Provider } from 'react-redux';

import './App.css';

import store from './store';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todolist: {}
    }
  }

  //load data when component will mount
  componentWillMount() {
    this.setState({
      todolists: [
        {
          name: "list1",
          todos: [
            {
              id: 0,
              title: "todo1.1",              
              completed: true
            },
            {
              id: 1,
              title: "todo2.1",
              completed: false
            },
            {
              id: 2,
              title: "todo3.1",              
              completed: true
            },
          ]
        },
        {
          name: "list2",
          todos: [
            {
              id: 3,
              title: "todo1.2",              
              completed: true
            },
            {
              id: 4,
              title: "todo2.2",
              completed: false
            },
            {
              id: 5,
              title: "todo3.2",              
              completed: true
            },
          ]
        }
      ]
    });
  }

  handleAddList(list){
    // console.log(list);
    let lists = this.state.todolists;
    lists.push(list);
    this.setState({todolists:lists});
  }

  handleUpdateToList(name, todos){
    console.log(name, todos);
    let todolists = this.state.todolists;
    todolists.forEach(todolist => {
      if(todolist.name === name){
        todolist.todos = todos;
      }
    });
    this.setState({todolists:todolists});
  }

  handleDeleteList(name){
    let todolists = this.state.todolists;
    let index = todolists.findIndex(x => x.name === name);
    todolists.splice(index, 1);
    this.setState({todolists:todolists});
  }

  render() {

    let todolists;
    if(this.state.todolists) {
      todolists = this.state.todolists.map(todolist => {
        //console.log(todolist);
        return (
          <TodoList key={todolist.name} todolist={todolist} updateList={this.handleUpdateToList.bind(this)} deleteList={this.handleDeleteList.bind(this)}/>
        );
      });
    }

    return (
      <Provider store={store}>
        <div className="App">
          <h1>ToDo App</h1>
          <AddList addList={this.handleAddList.bind(this)}/>
          <hr/>
          {todolists}
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import AddList from './Components/AddList';

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
              title: "todo1.1",
              desc: "This is the first todo",
              pending: true
            },
            {
              title: "todo2.1",
              desc: "This is the second todo",
              pending: false
            },
            {
              title: "todo3.1",
              desc: "This is the third todo",
              pending: true
            },
          ]
        },
        {
          name: "list2",
          todos: [
            {
              title: "todo1.2",
              desc: "This is the first todo",
              pending: true
            },
            {
              title: "todo2.2",
              desc: "This is the second todo",
              pending: false
            },
            {
              title: "todo3.2",
              desc: "This is the third todo",
              pending: true
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
      <div className="App">
        <h1>ToDo App</h1>
        <AddList addList={this.handleAddList.bind(this)}/>
        <hr/>
        {todolists}
      </div>
    );
  }
}

export default App;

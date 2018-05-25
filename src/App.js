import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import './App.css';

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

  render() {

    let todolists;
    if(this.state.todolists) {
      todolists = this.state.todolists.map(todolist => {
        //console.log(todolist);
        return (
          <TodoList key={todolist.name} todolist={todolist} />
        );
      });
    }

    return (
      <div className="App">
        <h1>ToDo App</h1>
        {todolists}
      </div>
    );
  }
}

export default App;

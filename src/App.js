import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todolist: {}
    }
  }

  //load data when component will mount
  componentWillMount(){
    this.setState({
      todolist: {
        name:"list1",
        todos:[
          {
            title:"todo1",
            desc:"This is the first todo",
            pending: true
          },
          {
            title:"todo2",
            desc:"This is the second todo",
            pending: false
          },
          {
            title:"todo3",
            desc:"This is the third todo",
            pending: true
          },
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        My App
        <TodoList todolist={this.state.todolist}/>
      </div>
    );
  }
}

export default App;

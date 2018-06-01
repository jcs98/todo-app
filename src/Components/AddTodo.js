import React, { Component } from 'react';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: {}
    }
  }

  handleSubmit(e) {
    if (!this.refs.title.value) {
      alert("Title is required");
    } else {
      this.setState({
        newTodo: {
          title: this.refs.title.value,
          completed: false
        }
      }, function () {
        //console.log(this.state);
        this.props.addTodo(this.state.newTodo);
      });
    }
    this.refs.title.value = '';
    e.preventDefault();
  }

  render() {

    return (
      <div>
        <h4>Add Todo: </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title: </label>
          <input type="text" ref="title" />
          <input type="submit" value="+" />
        </form>
        <br />
      </div>
    );
  }
}

export default AddTodo;

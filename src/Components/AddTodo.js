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
          desc: this.refs.desc.value,
          pending: true
        }
      }, function () {
        //console.log(this.state);
        this.props.addTodo(this.state.newTodo);
      });
    }
    e.preventDefault();
  }

  render() {

    return (
      <div>
        <h4>New Todo: </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title:</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" ref="desc" />
          </div>
          <input type="submit" value="Add" />
        </form>
        <br />
      </div>
    );
  }
}

export default AddTodo;

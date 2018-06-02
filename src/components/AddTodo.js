import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {

  render() {

    return (
      <div>
        <h4>Add Todo: </h4>
        <form >
          <label>Title: </label>
          <input type="text" ref="title" />
          <input type="submit" value="+" />
        </form>
        <br />
      </div>
    );
  }
}

export default connect()(AddTodo);

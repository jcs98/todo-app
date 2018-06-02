import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {

  render() {

    return (
      <div>
        <form onSubmit={
          e => {
            e.preventDefault()
            if (!this.refs.title.value)
              alert("Todo title is required!")
            else
              this.props.addTodo(this.refs.title.value)
            this.refs.title.value = ''
          }
        }>
          <input type="text" ref="title" placeholder="Add ToDo: Eg. Feed the cat"/>
          <input type="submit" value="+" />
        </form>
        <br />
      </div>
    );
  }
}

export default connect()(AddTodo);

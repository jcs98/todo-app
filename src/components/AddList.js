import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddList extends Component {

  render() {

    return (
      <div>
        <h4>Add List: </h4>
        <form onSubmit={
          e => {
            e.preventDefault()
            this.props.addTodolist(this.refs.name.value)
            this.refs.name.value = ''
          }
        }>
          <label>Name:  </label>
          <input type="text" ref="name" />
          <input type="submit" value="+" />
        </form>
        <br />
      </div>
    );
  }
}

export default connect()(AddList);

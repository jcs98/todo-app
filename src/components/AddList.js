import React, { Component } from 'react';

class AddList extends Component {

  constructor() {
    super();
    this.state = {
      newList: {}
    }
  }

  handleSubmit(e) {
    if (!this.refs.name.value) {
      alert("Name is required");
    } else {
      this.setState({
        newList: {
          name: this.refs.name.value,
          todos: []
        }
      }, function () {
        //console.log(this.state);
        this.props.addList(this.state.newList);
      });
    }
    this.refs.name.value = '';
    e.preventDefault();
  }

  render() {

    return (
      <div>
        <h4>Add List: </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Name:  </label>
          <input type="text" ref="name" />
          <input type="submit" value="+" />
        </form>
        <br />
      </div>
    );
  }
}

export default AddList;

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
    e.preventDefault();
  }

  render() {

    return (
      <div>
        <h4>Add List: </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name:</label>
            <input type="text" ref="name" />
          </div>
          <input type="submit" value="Add" />
        </form>
        <br />
      </div>
    );
  }
}

export default AddList;

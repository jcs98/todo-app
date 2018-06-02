import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddList extends Component {

  render() {

    return (
      <div>
        <form onSubmit={
          e => {
            e.preventDefault()
            if(!this.refs.name.value)
              alert("List Name is required!")
            else
              this.props.addTodolist(this.refs.name.value)
            this.refs.name.value = ''
          }
        }>
          <input type="text" ref="name" placeholder="New List: Eg. My Awesome List" size="22"/>
          <input type="submit" value="+" />
        </form>
        <br />
      </div>
    );
  }
}

export default connect()(AddList);

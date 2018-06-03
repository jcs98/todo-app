import React, { Component } from 'react'

export default class TodoFilter extends Component {
  render() {
    return (
      <div>
        <h3>Show:</h3>
        <form onChange={(e)=>this.props.filterTodos(e.target.value)}>
        <input type="radio" name="filter" value="ALL" />All
        <input type="radio" name="filter" value="PENDING" />Pending
        <input type="radio" name="filter" value="COMPLETED" />Completed
        </form>
        <h1 id="test"></h1>
      </div>
    )
  }
}

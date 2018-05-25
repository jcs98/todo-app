import React from 'react';

function Todo(props) {
  return (
    <li className="Todo">
      <strong>{props.todo.title}</strong>: {props.todo.desc}
    </li>
  );
}

export default Todo;

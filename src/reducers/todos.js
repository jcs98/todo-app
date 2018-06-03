const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.map(todolist =>
        (todolist.name === action.name)
          ? {
            ...todolist, todos: [...todolist.todos,
            {
              id: action.id,
              title: action.title,
              completed: false
            }
            ]
          }
          : todolist
      );
    case 'TOGGLE_TODO':
      return state.map(todolist =>
        (todolist.name === action.name)
          ? {
            ...todolist, todos: todolist.todos.map(todo =>
              (todo.id === action.id)
                ? { ...todo, completed: !todo.completed }
                : todo
            )
          }
          : todolist
      );
    case 'DELETE_TODO':
      return state.map(todolist =>
        (todolist.name === action.name)
          ? {
            ...todolist, 
            todos: todolist.todos.filter(todo => todo.id != action.id)
          }
          : todolist
      );
    case 'ADD_TODOLIST':
      return [
        ...state,
        {
          name: action.name,
          todos: []
        }
      ]
    case 'DELETE_TODOLIST':
      return state.filter(todolist => todolist.name !== action.name);
    default:
      return state;
  }
}

export default todos
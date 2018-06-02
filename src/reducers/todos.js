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
      console.log("toggling", action.name, action.id);
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
    case 'ADD_TODOLIST':

      console.log(action.name);
      console.log(state);

      console.log([
        ...state,
        {
          name: action.name,
          todos: []
        }
      ]);

      return [
        ...state,
        {
          name: action.name,
          todos: []
        }
      ]
    default:
      return state;
  }
}

export default todos
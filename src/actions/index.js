let nextTodoId = 6;

export const addTodo = (title, listName) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title,
  name: listName
})

export const toggleTodo = (id, listName) => ({
  type: 'TOGGLE_TODO',
  id: nextTodoId++,
  name: listName
})

export const addTodolist = (name) => ({
  type: 'ADD_TODOLIST',
  name,
})
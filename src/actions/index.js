let nextTodoId = 6;

export const addTodo = (title, listName) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title,
  name: listName
})

export const deleteTodo = (id, listName) => ({
  type: 'DELETE_TODO',
  id: id,
  name: listName
})

export const toggleTodo = (id, listName) => ({
  type: 'TOGGLE_TODO',
  id: id,
  name: listName
})

export const addTodolist = (name) => ({
  type: 'ADD_TODOLIST',
  name,
})

export const deleteTodolist = (name) => ({
  type: 'DELETE_TODOLIST',
  name,
})

export const filterTodos = (currentFilter) => ({
  type: 'FILTER_TODOS',
  currentFilter,
})
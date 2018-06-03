import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers'
import { app } from './reducers/'

const initialState = {
  todos: [
    {
      name: "list1",
      todos: [
        {
          id: 0,
          title: "todo1.1",
          completed: true
        },
        {
          id: 1,
          title: "todo2.1",
          completed: false
        },
        {
          id: 2,
          title: "todo3.1",
          completed: true
        },
      ]
    },
    {
      name: "list2",
      todos: [
        {
          id: 3,
          title: "todo1.2",
          completed: true
        },
        {
          id: 4,
          title: "todo2.2",
          completed: false
        },
        {
          id: 5,
          title: "todo3.2",
          completed: true
        },
      ]
    }
  ],
  currentFilter: "ALL"
};

const store = createStore(app, initialState, composeWithDevTools());

export default store;
import {
  FETCH_CURRENT_TODOS,
  FETCH_MORE_TODOS,
  REFRESH_TODOS,
  SET_CURRENT_TODO,
  SET_TODOS,
  TOGGLE_TODO,
} from './todo-list.action';

const initialState = {
  todos: [],
  totalTodosCount: 0,
  currentTodo: null,
  currentTodos: [],
  page: 1,
  limit: 10,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.todos, totalTodosCount: action.todos.length };
    case SET_CURRENT_TODO:
      return { ...state, currentTodo: action.todo };
    case TOGGLE_TODO: {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo,
      );

      const updatedCurrentTodos = updatedTodos.slice(0, state.page * state.limit);
      return { ...state, todos: updatedTodos, currentTodos: updatedCurrentTodos };
    }
    case FETCH_CURRENT_TODOS: {
      const currentTodos = state.todos.slice(0, state.limit);

      return { ...state, currentTodos };
    }
    case FETCH_MORE_TODOS: {
      const nextPage = state.page + 1;
      const moreTodos = state.todos.slice(0, nextPage * state.limit);

      return { ...state, page: nextPage, currentTodos: moreTodos };
    }
    case REFRESH_TODOS: {
      const refreshedTodos = state.todos.slice(0, state.limit);

      return { ...state, page: 1, currentTodos: refreshedTodos };
    }
    default:
      return state;
  }
};

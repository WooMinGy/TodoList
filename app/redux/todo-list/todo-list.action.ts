import { ITodo, ITodos } from './todo-list.type';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const FETCH_CURRENT_TODOS = 'FETCH_CURRENT_TODOS';
export const FETCH_MORE_TODOS = 'FETCH_MORE_TODOS';
export const REFRESH_TODOS = 'REFRESH_TODOS';
export const GET_TODO = 'GET_TODO';
export const SET_CURRENT_TODO = 'SET_CURRENT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const fetchCurrentTodos = () => ({
  type: FETCH_CURRENT_TODOS,
});

export const addTodo = (content: string) => ({
  type: ADD_TODO,
  content,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = (id: number, content: string, isDone: boolean) => ({
  type: UPDATE_TODO,
  id,
  content,
  isDone,
});

export const setTodos = (todos: ITodos) => ({
  type: SET_TODOS,
  todos,
});

export const fetchMoreTodos = () => ({
  type: FETCH_MORE_TODOS,
});

export const refreshTodos = () => ({
  type: REFRESH_TODOS,
});

export const getTodo = (id: number) => ({
  type: GET_TODO,
  id,
});

export const setCurrentTodo = (todo: ITodo) => ({
  type: SET_CURRENT_TODO,
  todo,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

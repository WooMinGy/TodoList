import { API_URL } from '@env';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import { call, put, takeEvery, select } from 'redux-saga/effects';

import {
  EnumMMKVKeystoreString,
  IMMKVKeystoreBoolean,
  IMMKVKeystoreNumber,
  IMMKVKeystoreString,
  createKeyStore,
} from '@/providers';

import {
  fetchTodos,
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  GET_TODO,
  setTodos,
  setCurrentTodo,
  TOGGLE_TODO,
  fetchCurrentTodos,
} from './todo-list.action';

const keystore = createKeyStore<IMMKVKeystoreString, IMMKVKeystoreNumber, IMMKVKeystoreBoolean>();

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, `${API_URL}/todo/`);

    if (!response.ok) {
      throw new Error('Network response error');
    }

    let todos = yield response.json();

    const isDoneArrayStr = keystore.getString(EnumMMKVKeystoreString.IS_DONE_ARRAY);
    let isDoneArray = isUndefined(isDoneArrayStr) ? [] : JSON.parse(isDoneArrayStr);

    if (isEmpty(isDoneArray)) {
      isDoneArray = todos.map((todo) => ({ id: todo.id, isDone: false }));
      keystore.set(EnumMMKVKeystoreString.IS_DONE_ARRAY, JSON.stringify(isDoneArray));
    } else {
      todos = todos.map((todo) => ({
        ...todo,
        isDone: isDoneArray.find((item) => item.id === todo.id)?.isDone || false,
      }));
    }

    yield put(setTodos(todos.reverse()));
    yield put(fetchCurrentTodos());
  } catch (error) {
    console.error(error);
  }
}

function* addTodoSaga(action) {
  try {
    yield call(axios.post, `${API_URL}/todo/`, { content: action.content });
    yield put(fetchTodos());
  } catch (error) {
    console.error(error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/todo/${action.id}/`);
    yield put(fetchTodos());
  } catch (error) {
    console.error(error);
  }
}

function* updateTodoSaga(action) {
  try {
    yield call(axios.patch, `${API_URL}/todo/${action.id}/`, { content: action.content });
    yield put(setCurrentTodo({ id: action.id, content: action.content, isDone: action.isDone }));
    yield put(fetchTodos());
  } catch (error) {
    console.error(error);
  }
}

function* getTodoSaga(action) {
  const todos = yield select((state) => state.todoList.todos);
  const todo = todos.find((todo) => todo.id === action.id);
  yield put(setCurrentTodo(todo));
}

function* toggleTodoSaga() {
  const todos = yield select((state) => state.todoList.todos);

  const isDoneArray = todos.map(({ id, isDone }) => ({ id, isDone }));
  keystore.set(EnumMMKVKeystoreString.IS_DONE_ARRAY, JSON.stringify(isDoneArray));

  yield put(setTodos(todos));
}

export default function* rootSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
  yield takeEvery(UPDATE_TODO, updateTodoSaga);
  yield takeEvery(GET_TODO, getTodoSaga);
  yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
}

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { todoReducer } from './todo-list';
import rootSaga from './todo-list/todo-list.saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { todoList: todoReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

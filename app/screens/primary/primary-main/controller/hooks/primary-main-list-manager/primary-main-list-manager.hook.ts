import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ITodos,
  addTodo,
  deleteTodo,
  fetchMoreTodos,
  fetchTodos,
  refreshTodos,
  toggleTodo,
} from '@/redux';

type IPrimaryMainListManagerInput = void;
type IPrimaryMainListManagerOutput = {
  currentTodos: ITodos;
  hasMoreTodos: boolean;
  fetchMore: Util<void, void>;
  refresh: Util<void, void>;
  removeTodo: Util<number, void>;
  addNewTodo: Util<string, void>;
  toggleIsDone: Util<number, void>;
};

export const usePrimaryMainListManager: Hook<
  IPrimaryMainListManagerInput,
  IPrimaryMainListManagerOutput
> = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(({ todoList }) => todoList);
  const { currentTodos, totalTodosCount } = todoList;
  const hasMoreTodos = (currentTodos && currentTodos.length) !== totalTodosCount;

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const fetchMore = useCallback(() => {
    const hasNoMoreTodos = !hasMoreTodos;
    if (hasNoMoreTodos) {
      return;
    }

    dispatch(fetchMoreTodos());
  }, [hasMoreTodos]);

  const refresh = useCallback(() => {
    dispatch(refreshTodos());
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch(deleteTodo(id));
  }, []);

  const addNewTodo = useCallback((content: string) => {
    dispatch(addTodo(content));
  }, []);

  const toggleIsDone = useCallback((id: number) => {
    dispatch(toggleTodo(id));
  }, []);

  return { currentTodos, hasMoreTodos, fetchMore, refresh, removeTodo, addNewTodo, toggleIsDone };
};

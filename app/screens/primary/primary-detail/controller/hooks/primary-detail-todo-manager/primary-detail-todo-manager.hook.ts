import { useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PrimaryDetailScreenRouteProp } from '../../../primary-detail.screen';

import { ITodo, deleteTodo, getTodo, toggleTodo, updateTodo } from '@/redux';

type IPrimaryDetailTodoManagerInput = void;
type IPrimaryDetailTodoManagerOutput = {
  currentTodo: ITodo;
  removeTodo: Util<number, void>;
  editTodo: Util<string, void>;
  toggleIsDone: Util<number, void>;
  getCurrentTodo: Util<void, void>;
};

export const usePrimaryDetailTodoManager: Hook<
  IPrimaryDetailTodoManagerInput,
  IPrimaryDetailTodoManagerOutput
> = () => {
  const {
    params: { id },
  } = useRoute<PrimaryDetailScreenRouteProp>();
  const dispatch = useDispatch();

  const currentTodo = useSelector(({ todoList: { currentTodo } }) => currentTodo);

  const getCurrentTodo = useCallback(() => {
    dispatch(getTodo(id));
  }, []);

  const editTodo = useCallback(
    (content: string) => {
      const { isDone } = currentTodo;

      dispatch(updateTodo(id, content, isDone));
    },
    [currentTodo],
  );

  const removeTodo = useCallback((id: number) => {
    dispatch(deleteTodo(id));
  }, []);

  const toggleIsDone = useCallback((id: number) => {
    dispatch(toggleTodo(id));
  }, []);

  return { currentTodo, removeTodo, editTodo, toggleIsDone, getCurrentTodo };
};

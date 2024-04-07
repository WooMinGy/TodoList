import { useCallback } from 'react';

import {
  usePrimaryMainListManager,
  usePrimaryMainNavigation,
  usePrimaryMainOpenModal,
} from './hooks';

import { ITodos } from '@/redux';

type IPrimaryMainControllerInput = void;
type IPrimaryMainControllerOutput = {
  currentTodos: ITodos;
  hasMoreTodos: boolean;
  goDetailScreen: Util<number, void>;
  openAddTodo: Util<void, void>;
  openDeleteTodo: Util<number, void>;
  toggleIsDone: Util<number, void>;
  fetchMore: Util<void, void>;
  refresh: Util<void, void>;
};

export const usePrimaryMainController: Controller<
  IPrimaryMainControllerInput,
  IPrimaryMainControllerOutput
> = () => {
  const { goDetailScreen } = usePrimaryMainNavigation();
  const { openAddTodoModal, openDeleteTodoModal } = usePrimaryMainOpenModal();
  const { currentTodos, hasMoreTodos, fetchMore, refresh, removeTodo, addNewTodo, toggleIsDone } =
    usePrimaryMainListManager();

  const openAddTodo = useCallback(() => {
    openAddTodoModal({
      onPressOkay: addNewTodo,
    });
  }, [openAddTodoModal, addNewTodo]);

  const openDeleteTodo = useCallback(
    (id: number) => {
      openDeleteTodoModal({
        onPressOkay: () => {
          removeTodo(id);
        },
      });
    },
    [openDeleteTodoModal, removeTodo],
  );

  return {
    currentTodos,
    hasMoreTodos,
    goDetailScreen,
    openDeleteTodo,
    openAddTodo,
    toggleIsDone,
    fetchMore,
    refresh,
  };
};

import { useCallback } from 'react';
import { useDidMount } from 'rooks';

import {
  usePrimaryDetailNavigation,
  usePrimaryDetailOpenModal,
  usePrimaryDetailTodoManager,
} from './hooks';

import { ITodo } from '@/redux';

type IPrimaryDetailControllerInput = void;
type IPrimaryDetailControllerOutput = {
  currentTodo: ITodo;
  goBack: Util<void, void>;
  openEditTodo: Util<void, void>;
  openDeleteTodo: Util<void, void>;
  toggleTodo: Util<void, void>;
};

export const usePrimaryDetailController: Controller<
  IPrimaryDetailControllerInput,
  IPrimaryDetailControllerOutput
> = () => {
  const { goBack } = usePrimaryDetailNavigation();
  const { currentTodo, removeTodo, editTodo, toggleIsDone, getCurrentTodo } =
    usePrimaryDetailTodoManager();
  const { openEditTodoModal, openDeleteTodoModal } = usePrimaryDetailOpenModal();

  const openEditTodo = useCallback(() => {
    const { content: currentContent } = currentTodo;
    openEditTodoModal({
      content: currentContent,
      onPressOkay: (content: string) => {
        editTodo(content);
      },
    });
  }, [openEditTodoModal, editTodo, currentTodo]);

  const openDeleteTodo = useCallback(() => {
    const { id } = currentTodo;

    openDeleteTodoModal({
      onPressOkay: () => {
        removeTodo(id);
        goBack();
      },
    });
  }, [openDeleteTodoModal, removeTodo, currentTodo]);

  const toggleTodo = useCallback(() => {
    const { id } = currentTodo;

    toggleIsDone(id);
    getCurrentTodo();
  }, [toggleIsDone, getCurrentTodo, currentTodo]);

  useDidMount(getCurrentTodo);

  return { currentTodo, goBack, openEditTodo, openDeleteTodo, toggleTodo };
};

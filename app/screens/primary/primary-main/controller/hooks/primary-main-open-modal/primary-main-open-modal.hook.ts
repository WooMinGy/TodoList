import { useCallback } from 'react';

import { useModal } from '@/hooks';

type IPrimaryMainOpenModalInput = void;
type IPrimaryMainOpenModalOutput = {
  openAddTodoModal: Util<{ onPressOkay: Util<string, void> }, void>;
  openDeleteTodoModal: Util<{ onPressOkay: Util<void, void> }, void>;
};

export const usePrimaryMainOpenModal: Hook<
  IPrimaryMainOpenModalInput,
  IPrimaryMainOpenModalOutput
> = () => {
  const { openModal } = useModal();

  const openAddTodoModal = useCallback(({ onPressOkay }: { onPressOkay: Util<string, void> }) => {
    openModal('ModalDialogInput', {
      title: '추가하기',
      cancelButton: {
        label: '취소',
      },
      okayButton: {
        label: '추가',
        onClose: onPressOkay,
      },
    });
  }, []);

  const openDeleteTodoModal = useCallback(({ onPressOkay }: { onPressOkay: Util<void, void> }) => {
    openModal('ModalDialog', {
      title: '삭제하기',
      content: '정말 삭제하시겠습니까?',
      cancelButton: {
        label: '취소',
      },
      okayButton: {
        label: '삭제하기',
        onClose: onPressOkay,
      },
    });
  }, []);

  return { openAddTodoModal, openDeleteTodoModal };
};

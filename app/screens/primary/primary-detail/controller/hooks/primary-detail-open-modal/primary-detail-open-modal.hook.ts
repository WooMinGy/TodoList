import { useCallback } from 'react';

import { useModal } from '@/hooks';

type IPrimaryDetailOpenModalInput = void;
type IPrimaryDetailOpenModalOutput = {
  openEditTodoModal: Util<{ content: string; onPressOkay: Util<string, void> }, void>;
  openDeleteTodoModal: Util<{ onPressOkay: Util<void, void> }, void>;
};

export const usePrimaryDetailOpenModal: Hook<
  IPrimaryDetailOpenModalInput,
  IPrimaryDetailOpenModalOutput
> = () => {
  const { openModal } = useModal();

  const openEditTodoModal = useCallback(
    ({ content, onPressOkay }: { content: string; onPressOkay: Util<string, void> }) => {
      openModal('ModalDialogInput', {
        title: '수정하기',
        content,
        cancelButton: {
          label: '취소',
        },
        okayButton: {
          label: '완료',
          onClose: onPressOkay,
        },
      });
    },
    [],
  );

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

  return { openEditTodoModal, openDeleteTodoModal };
};

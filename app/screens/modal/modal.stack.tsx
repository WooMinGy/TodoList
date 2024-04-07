import { ComponentProps, ReactElement } from 'react';
import { createModalStack, ModalOptions, ModalStackConfig } from 'react-native-modalfy';

import { Button } from '@/components';

import { ModalDialog } from './modal-dialog';
import { ModalDialogInput } from './modal-dialog-input';

export type IModalStackParams = {
  ModalDialog: {
    title: string | ReactElement;
    content?: string;
    okayButton?:
      | boolean
      | (Omit<ComponentProps<typeof Button>, 'children' | 'loading'> & {
          label: string | ReactElement;
          onClose?: Util<void, void>;
        });
    cancelButton?:
      | boolean
      | (Omit<ComponentProps<typeof Button>, 'children'> & {
          label: string | ReactElement;
          onClose?: Util<void, void>;
        });
    onPop?: () => void;
  };
  ModalDialogInput: {
    title: string | ReactElement;
    content?: string;
    okayButton?:
      | boolean
      | (Omit<ComponentProps<typeof Button>, 'children' | 'loading'> & {
          label: string | ReactElement;
          onClose: Util<string, void>;
        });
    cancelButton?:
      | boolean
      | (Omit<ComponentProps<typeof Button>, 'children'> & {
          label: string | ReactElement;
          onClose?: Util<void, void>;
        });
    onPop?: () => void;
  };
};

const modalConfig: ModalStackConfig = {
  ModalDialogInput,
  ModalDialog,
};

const defaultOptions: ModalOptions = {
  backdropOpacity: 0.6,
  disableFlingGesture: true,
  backBehavior: 'none',
};

export const modalStack = createModalStack<IModalStackParams>(modalConfig, defaultOptions);

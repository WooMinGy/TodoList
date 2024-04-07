import { useBackHandler } from '@react-native-community/hooks';
import { GestureResponderEvent, useWindowDimensions } from 'react-native';
import { ModalComponentProp, ModalComponentWithOptions } from 'react-native-modalfy';

import { Box, Stack, palette, radius, spacing, Text, Button, TextFieldsAtom } from '@/components';

import { IModalStackParams } from '../modal.stack';

import { useModalDialogInputForm } from './hooks';

export type IModalDialogInputProps = ModalComponentProp<
  IModalStackParams,
  void,
  'ModalDialogInput'
>;

export const ModalDialogInput: ModalComponentWithOptions<IModalDialogInputProps> = ({ modal }) => {
  const { params, closeModal } = modal;
  const { title, content, okayButton = true, cancelButton = true } = params;

  const { newContent, setContent, isDisabled } = useModalDialogInputForm({ content });

  const { width } = useWindowDimensions();
  const { onPop } = params;

  useBackHandler(() => {
    closeModal('ModalDialogInput', () => {
      onPop && onPop();
    });
    return true;
  });

  const handlePressOkayButton = async (e: GestureResponderEvent) => {
    if (typeof okayButton !== 'boolean') {
      const { onPress, onClose } = okayButton;
      onPress && (await onPress(e));
      closeModal('ModalDialogInput', () => {
        onClose(newContent);
      });
    } else {
      closeModal('ModalDialogInput', () => {
        onPop && onPop();
      });
    }
  };

  const handlePressCancelButton = async (e: GestureResponderEvent) => {
    if (typeof cancelButton !== 'boolean') {
      const { onPress, onClose } = cancelButton;
      onPress && (await onPress(e));
      closeModal('ModalDialogInput', () => {
        onClose && onClose();
      });
    } else {
      closeModal('ModalDialogInput', () => {
        onPop && onPop();
      });
    }
  };

  return (
    <Box
      padding={spacing['6-x']}
      style={{
        backgroundColor: palette['onPrimary'],
        width: width - 2 * spacing['8-x'],
        borderRadius: radius['2-x'],
      }}
      alignX="center"
      alignY="center"
      alignSelf="center"
    >
      <Stack align="center" space={spacing['4-x']}>
        {!!title && (
          <Text textType="h5" color="textPrimary">
            {title}
          </Text>
        )}
        <TextFieldsAtom
          type="outline"
          autoFocus
          onChangeText={setContent}
          value={newContent}
          placeholder={'할 일을 작성하세요!'}
        />
        <Stack space={spacing['2-x']}>
          {!!okayButton && (
            <Button
              {...(typeof okayButton !== 'boolean' && okayButton)}
              mode={(typeof okayButton !== 'boolean' && okayButton.mode) || 'filled'}
              onPress={handlePressOkayButton}
              borderRadius={radius['3-x']}
              style={{ backgroundColor: isDisabled ? palette['bg-gray'] : palette['primary'] }}
              disabled={isDisabled}
            >
              {(typeof okayButton !== 'boolean' && okayButton.label) || '확인'}
            </Button>
          )}
          {!!cancelButton && (
            <Button
              {...(typeof cancelButton !== 'boolean' && cancelButton)}
              mode={(typeof cancelButton !== 'boolean' && cancelButton.mode) || 'filled-tonal'}
              onPress={handlePressCancelButton}
              borderRadius={radius['3-x']}
              style={{ backgroundColor: palette['secondaryContainer'] }}
            >
              {(typeof cancelButton !== 'boolean' && cancelButton.label) || '취소'}
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

ModalDialogInput.modalOptions = {
  backBehavior: 'none',
};

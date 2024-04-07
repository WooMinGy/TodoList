import { useBackHandler } from '@react-native-community/hooks';
import { GestureResponderEvent, useWindowDimensions } from 'react-native';
import { ModalComponentProp, ModalComponentWithOptions } from 'react-native-modalfy';

import { Box, Stack, palette, radius, spacing, Text, Button } from '@/components';

import { IModalStackParams } from '../modal.stack';

export type IModalDialogProps = ModalComponentProp<IModalStackParams, void, 'ModalDialog'>;

export const ModalDialog: ModalComponentWithOptions<IModalDialogProps> = ({ modal }) => {
  const { params, closeModal } = modal;
  const { title, content, okayButton = true, cancelButton = true } = params;

  const { width } = useWindowDimensions();
  const { onPop } = params;

  useBackHandler(() => {
    closeModal('ModalDialog', () => {
      onPop && onPop();
    });
    return true;
  });

  const handlePressOkayButton = async (e: GestureResponderEvent) => {
    if (typeof okayButton !== 'boolean') {
      const { onPress, onClose } = okayButton;
      onPress && (await onPress(e));
      closeModal('ModalDialog', () => {
        onClose && onClose();
      });
    } else {
      closeModal('ModalDialog', () => {
        onPop && onPop();
      });
    }
  };

  const handlePressCancelButton = async (e: GestureResponderEvent) => {
    if (typeof cancelButton !== 'boolean') {
      const { onPress, onClose } = cancelButton;
      onPress && (await onPress(e));
      closeModal('ModalDialog', () => {
        onClose && onClose();
      });
    } else {
      closeModal('ModalDialog', () => {
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
          <Text textType="h5" color="textPrimary" textAlignment="center">
            {title}
          </Text>
        )}
        {!!content && (
          <Text textType="b1" color="textSecondary" textAlignment="center">
            {content}
          </Text>
        )}
        <Stack space={spacing['2-x']}>
          {!!okayButton && (
            <Button
              {...(typeof okayButton !== 'boolean' && okayButton)}
              mode={(typeof okayButton !== 'boolean' && okayButton.mode) || 'filled'}
              onPress={handlePressOkayButton}
              borderRadius={radius['3-x']}
              style={{ backgroundColor: palette['primary'] }}
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

ModalDialog.modalOptions = {
  backBehavior: 'pop',
};

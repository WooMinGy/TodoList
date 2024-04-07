import { forwardRef, memo, useCallback } from 'react';
import {
  NativeSyntheticEvent,
  TextInput as NativeTextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import { Box, palette, radius, size } from '../..';

type ITextFieldsAtomProps = {
  type: 'outline' | 'numberBox';
  state?: 'error';
  autoFocus?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  placeholder?: string;
  clickDisabled?: boolean;
};

export type ITextFieldsAtomRef = NativeTextInput;

export const TextFieldsAtom = memo(
  forwardRef<ITextFieldsAtomRef, ITextFieldsAtomProps>(
    (
      {
        type,
        state,
        autoFocus = true,
        value,
        onChangeText,
        onKeyPress,
        placeholder,
        clickDisabled,
      },
      ref,
    ) => {
      const isError = state === 'error';

      const handleChangeText = useCallback(
        (text: string) => {
          onChangeText(text);
        },
        [onChangeText],
      );

      if (type === 'numberBox') {
        return (
          <Box pointerEvents={clickDisabled ? 'none' : 'auto'}>
            <TextInput
              mode="outlined"
              ref={ref}
              outlineStyle={{ borderWidth: size['1-x'], borderRadius: radius['3-x'] }}
              outlineColor={palette['gOutlineVariant']}
              activeOutlineColor={palette['gPrimary']}
              style={{
                width: size['11-x'],
                aspectRatio: 44 / 60,
                backgroundColor: palette['gSurfaceBright'],
                fontSize: size['5-x'],
                lineHeight: size['7-x'],
                justifyContent: 'center',
                letterSpacing: 0.15,
                fontWeight: 'bold',
              }}
              textColor={isError ? palette['error'] : palette['gPrimary']}
              keyboardType="numeric"
              autoFocus={autoFocus}
              multiline={false}
              numberOfLines={1}
              error={isError}
              theme={{
                colors: {
                  error: palette['statusDanger'],
                },
              }}
              maxLength={1}
              onKeyPress={onKeyPress}
              onChangeText={handleChangeText}
              value={value}
            />
          </Box>
        );
      }

      if (type === 'outline') {
        return (
          <TextInput
            mode="outlined"
            outlineStyle={{ borderWidth: size['0.5-x'], borderRadius: radius['3-x'] }}
            outlineColor={palette['secondaryContainer']}
            activeOutlineColor={palette['secondaryContainerActive']}
            style={{
              width: '100%',
              height: size['30-x'],
              backgroundColor: palette['surfaceBright'],
              fontSize: size['4-x'],
              letterSpacing: 0.15,
            }}
            textColor={palette['black-80']}
            keyboardType="default"
            autoFocus={autoFocus}
            multiline
            numberOfLines={8}
            error={isError}
            theme={{
              colors: {
                error: palette['error'],
              },
            }}
            onChangeText={handleChangeText}
            value={value}
            placeholder={placeholder}
          />
        );
      }
    },
  ),
);

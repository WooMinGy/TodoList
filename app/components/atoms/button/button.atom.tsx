import { ComponentProps, FC, ReactNode } from 'react';
import { TextStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { Merge } from 'type-fest';

import { palette, radius, spacing } from '@/components/theme';

type IButtonMode = 'text' | 'outlined' | 'elevated' | 'filled' | 'filled-tonal';

type IButtonProps = Merge<
  ComponentProps<typeof PaperButton>,
  {
    mode?: IButtonMode;
    isCTAMode?: boolean;
    children?: ReactNode;
    textStyle?: TextStyle;
    textCategory?: 'button' | 'button_s';
    size?: string;
    borderRadius?: number;
  }
>;

const convertMode = {
  text: 'text',
  outlined: 'outlined',
  elevated: 'elevated',
  filled: 'contained',
  ['filled-tonal']: 'contained-tonal',
} as const;

export const Button: FC<IButtonProps> = ({
  mode,
  onPress,
  children,
  style,
  contentStyle,
  isCTAMode,
  borderRadius,
  ...rest
}) => {
  const buttonMode = convertMode[mode];
  const isOutlinedMode = mode === 'outlined';

  const getBorderRadius = () => {
    if (!borderRadius && isCTAMode) {
      return radius['3-x'];
    }
    if (!borderRadius && !isCTAMode) {
      return radius['25-x'];
    }
    return borderRadius;
  };

  const buttonStyle = Object.assign({}, style, {
    borderRadius: getBorderRadius(),
  });

  const buttonContentStyle = Object.assign(
    {},
    contentStyle,
    isCTAMode
      ? {
          paddingVertical: spacing['3-x'],
        }
      : {},
  );

  return (
    <PaperButton
      mode={buttonMode}
      textColor={isOutlinedMode && palette['onSecondaryContainer']}
      onPress={onPress}
      style={buttonStyle}
      contentStyle={buttonContentStyle}
      {...rest}
    >
      {children}
    </PaperButton>
  );
};

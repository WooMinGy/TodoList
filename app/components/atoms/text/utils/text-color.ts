import { ColorValue } from 'react-native';

import { palette } from '@/components/theme';

export type IGeneralTextColor =
  | 'textPrimary'
  | 'textSecondary'
  | 'white'
  | 'blueMain'
  | 'primary'
  | 'onPrimary'
  | 'onSecondaryContainer'
  | 'onSurface_a38'
  | 'onSurfaceVariant'
  | 'statusReady'
  | 'statusComplete'
  | 'error';

type ICustomTextColor = 'custom';

export type ITextColor = IGeneralTextColor | ICustomTextColor;

export const getTextColorStyle = (color: ITextColor, customColor?: ColorValue) => {
  if (color === 'textPrimary') {
    return { color: palette['black-100'] };
  }

  if (color === 'textSecondary') {
    return { color: palette['black-80'] };
  }

  if (color === 'white') {
    return { color: palette['white-100'] };
  }

  if (color === 'blueMain') {
    return { color: palette['blue-main'] };
  }

  if (color === 'primary') {
    return { color: palette['primary'] };
  }

  if (color === 'onPrimary') {
    return { color: palette['onPrimary'] };
  }

  if (color === 'onSecondaryContainer') {
    return { color: palette['onSecondaryContainer'] };
  }

  if (color === 'onSurface_a38') {
    return { color: palette['onSurface_a38'] };
  }

  if (color === 'statusReady') {
    return { color: palette['statusReady'] };
  }

  if (color === 'statusComplete') {
    return { color: palette['statusComplete'] };
  }

  if (color === 'error') {
    return { color: palette['error'] };
  }

  if (color === 'onSurfaceVariant') {
    return { color: palette['onSurfaceVariant'] };
  }

  if (color === 'custom') {
    return { color: customColor };
  }
};

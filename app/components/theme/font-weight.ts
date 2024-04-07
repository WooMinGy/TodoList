import { TextStyle } from 'react-native';

const defaultFontWeight = {
  '100': '100',
  '200': '200',
  '300': '300',
  '400': '400',
  '500': '500',
  '600': '600',
  '700': '700',
  '800': '800',
  '900': '900',
};

export const fontWeight = Object.fromEntries(
  Object.entries(defaultFontWeight).map((e) => {
    const keyName = e[0] as Pick<TextStyle, 'fontWeight'>;
    const value = e[1];
    return [keyName, value];
  }),
);

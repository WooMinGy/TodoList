export type ITextTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'b1'
  | 'b2'
  | 'button'
  | 'bottom-tab';

export const getTextTypeStyle = (textType: ITextTypes) => {
  const textStyleMapping = {
    ['h1']: {
      fontSize: 60,
      lineHeight: 78,
      fontFamily: 'AppleSDGothicNeoSB',
    },
    ['h2']: {
      fontSize: 48,
      lineHeight: 62,
      fontFamily: 'AppleSDGothicNeoSB',
    },
    ['h3']: {
      fontSize: 32,
      lineHeight: 36,
      letterSpacing: -0.56,
      fontFamily: 'AppleSDGothicNeoSB',
    },
    ['h4']: {
      fontSize: 30,
      lineHeight: 38,
      fontFamily: 'AppleSDGothicNeoSB',
    },
    ['h5']: {
      fontSize: 26,
      lineHeight: 32,
      fontFamily: 'AppleSDGothicNeoSB',
    },
    ['h6']: {
      fontSize: 22,
      lineHeight: 28,
      fontFamily: 'AppleSDGothicNeoSB',
    },
    ['b1']: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
      fontFamily: 'AppleSDGothicNeoR',
    },
    ['b2']: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'AppleSDGothicNeoR',
    },
    ['button']: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'AppleSDGothicNeoR',
    },
    ['bottom-tab']: {
      fontSize: 10,
      fontFamily: 'AppleSDGothicNeoSB',
    },
  };

  return textStyleMapping[textType];
};

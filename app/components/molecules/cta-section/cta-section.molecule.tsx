import { ComponentProps, memo } from 'react';
import { ValueOf } from 'type-fest';

import { ITextColor } from '@/components/atoms/text/utils';
import { palette, radius, spacing } from '@/components/theme';

import { Text, Button } from '../../atoms';
import { Columns, Column } from '../../layouts';

export type ICtaMode = 'primary' | 'secondary' | 'outlined' | 'text';

export type IButton = Omit<ComponentProps<typeof Button>, 'children'> & {
  label: string;
  ctaMode: ICtaMode;
};

export type ICTASectionMoleculeProps = {
  buttons: IButton[];
};

const convertMode = {
  primary: 'filled',
  secondary: 'filled',
  outlined: 'filled-tonal',
  text: 'text',
} as const;

const handleTextColor = (
  ctaMode: ValueOf<IButton, 'ctaMode'>,
  disabled: ValueOf<IButton, 'disabled'>,
): ITextColor => {
  if (disabled) {
    return 'onSurface_a38';
  } else {
    switch (ctaMode) {
      case 'text':
        return 'primary';
      case 'outlined':
        return 'onSecondaryContainer';
      case 'secondary':
        return 'onSecondaryContainer';
      default:
        return 'onPrimary';
    }
  }
};

const handleButtonColor = (
  ctaMode: ValueOf<IButton, 'ctaMode'>,
  disabled: ValueOf<IButton, 'disabled'>,
) => {
  if (disabled) {
    return palette['onSurface_a12'];
  } else {
    switch (ctaMode) {
      case 'text':
        return null;
      case 'outlined':
        return null;
      case 'secondary':
        return palette['secondaryContainer'];
      default:
        return palette['primary'];
    }
  }
};

export const CTASectionMolecule = memo<ICTASectionMoleculeProps>(({ buttons }) => {
  const hasTextButton = buttons.find(({ ctaMode }) => ctaMode === 'text');

  if (hasTextButton) {
    return (
      <Columns
        alignY="center"
        space={spacing['2-x']}
        paddingX={spacing['4-x']}
        paddingY={spacing['6-x']}
        style={{
          backgroundColor: palette['surfaceBright'],
        }}
      >
        {buttons.map(({ ctaMode, label, disabled, ...buttonProps }, idx) => {
          if (ctaMode === 'text')
            return (
              <Column width="content">
                <Button
                  {...buttonProps}
                  disabled={disabled}
                  mode="text"
                  labelStyle={{
                    marginVertical: 0,
                  }}
                  contentStyle={{
                    paddingVertical: spacing['3-x'],
                  }}
                  isCTAMode
                >
                  <Text textType="button" color={handleTextColor(ctaMode, disabled)}>
                    {label}
                  </Text>
                </Button>
              </Column>
            );

          return (
            <Column width="fluid" key={idx}>
              <Button
                {...buttonProps}
                disabled={disabled}
                contentStyle={{
                  paddingVertical: spacing['3-x'],
                }}
                labelStyle={{
                  marginVertical: 0,
                }}
                style={{
                  backgroundColor: handleButtonColor(ctaMode, disabled),
                  borderRadius: radius['3-x'],
                }}
                isCTAMode
              >
                <Text textType="button" color={handleTextColor(ctaMode, disabled)}>
                  {label}
                </Text>
              </Button>
            </Column>
          );
        })}
      </Columns>
    );
  }

  return (
    <Columns
      alignY="center"
      space={spacing['2-x']}
      paddingX={spacing['4-x']}
      paddingY={spacing['6-x']}
      style={{
        backgroundColor: palette['surfaceBright'],
      }}
    >
      {buttons.map(({ ctaMode, label, disabled, ...buttonProps }, index) => {
        const buttonMode = convertMode[ctaMode];

        return (
          <Column key={index}>
            <Button
              {...buttonProps}
              mode={buttonMode}
              disabled={disabled}
              contentStyle={{
                paddingVertical: spacing['3-x'],
              }}
              labelStyle={{
                marginVertical: 0,
              }}
              style={{
                backgroundColor: handleButtonColor(ctaMode, disabled),
                borderRadius: radius['3-x'],
              }}
              isCTAMode
            >
              <Text textType="button" color={handleTextColor(ctaMode, disabled)}>
                {label}
              </Text>
            </Button>
          </Column>
        );
      })}
    </Columns>
  );
});

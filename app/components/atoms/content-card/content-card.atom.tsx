import { memo } from 'react';
import { Pressable } from 'react-native';

import {
  Box,
  Column,
  Columns,
  Icon,
  Stack,
  Text,
  palette,
  radius,
  size,
  spacing,
} from '@/components';

type IContentCardAtomProps = {
  isDone: boolean;
  content: string;
  onRemove: () => void;
};

export const ContentCardAtom = memo<IContentCardAtomProps>(({ isDone, content, onRemove }) => {
  return (
    <Box paddingX={spacing['4-x']} paddingY={spacing['6-x']}>
      <Stack
        paddingX={spacing['4-x']}
        paddingY={spacing['3-x']}
        space={spacing['6-x']}
        style={{
          minHeight: size['60-x'],
          borderRadius: radius['3-x'],
          backgroundColor: palette['surface'],
        }}
      >
        <Columns alignY="center">
          <Column width="fluid">
            <Box
              paddingX={spacing['3-x']}
              paddingY={spacing['2-x']}
              style={{
                borderRadius: radius['2-x'],
                backgroundColor: isDone
                  ? palette['statusCompleteContainer']
                  : palette['statusReadyContainer'],
                alignSelf: 'flex-start',
              }}
            >
              <Text textType="b2" color={isDone ? 'statusComplete' : 'statusReady'}>
                {isDone ? 'DONE' : 'TODO'}
              </Text>
            </Box>
          </Column>
          <Column width="content">
            <Pressable onPress={onRemove} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Box padding={spacing['2-x']}>
                <Icon name="bin" size={size['6-x']} />
              </Box>
            </Pressable>
          </Column>
        </Columns>
        <Text textType="b1" color="textPrimary">
          {content}
        </Text>
      </Stack>
    </Box>
  );
});

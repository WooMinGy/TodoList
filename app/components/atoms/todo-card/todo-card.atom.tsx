import { memo } from 'react';
import { Pressable } from 'react-native';
import { Checkbox } from 'react-native-paper';

import { Icon, palette, radius, size, spacing, Text } from '@/components';

import { Box, Column, Columns, Stack } from '../../layouts';

export type ITodoCardAtomProps = {
  id: number;
  content: string;
  isDone: boolean;
  onPressCard: () => void;
  onCheck: () => void;
  onRemove: () => void;
};

export const TodoCardAtom = memo<ITodoCardAtomProps>(
  ({ content, isDone, onPressCard, onCheck, onRemove }) => {
    return (
      <Pressable onPress={onPressCard} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
        <Columns
          alignY="center"
          padding={spacing['3-x']}
          space={spacing['4-x']}
          style={{
            minHeight: size['35-x'],
            borderRadius: radius['3-x'],
            backgroundColor: palette['surface1'],
          }}
        >
          <Column width="content">
            <Checkbox.Android status={isDone ? 'checked' : 'unchecked'} onPress={onCheck} />
          </Column>
          <Column width="fluid">
            <Stack space={spacing['1-x']}>
              <Text textType="b2" color="textPrimary" numberOfLines={5}>
                {content}
              </Text>
            </Stack>
          </Column>
          <Column width="content">
            <Pressable onPress={onRemove} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Box padding={spacing['2-x']}>
                <Icon name="bin" size={size['6-x']} />
              </Box>
            </Pressable>
          </Column>
        </Columns>
      </Pressable>
    );
  },
);

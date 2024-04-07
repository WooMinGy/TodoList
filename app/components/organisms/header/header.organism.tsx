import { memo } from 'react';
import { Pressable } from 'react-native';

import { Box, Icon, palette, size, spacing, Stack, Text } from '@/components';

type IHeaderOrganismProps = {
  title: string;
  backButton?: {
    name: string;
    onPress: () => void;
  };
};

export const HeaderOrganism = memo<IHeaderOrganismProps>(({ backButton, title }) => {
  return (
    <Stack
      horizontal
      paddingY={spacing['3-x']}
      paddingX={backButton ? spacing['2-x'] : spacing['4-x']}
      space={spacing['2-x']}
      align="center"
      style={{
        backgroundColor: palette['surfaceBright'],
      }}
    >
      {backButton && (
        <Pressable
          onPress={backButton.onPress}
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
        >
          <Box padding={size['2-x']}>
            <Icon name={backButton.name} size={size['6-x']} />
          </Box>
        </Pressable>
      )}
      <Text textType="h4" color="textPrimary">
        {title}
      </Text>
    </Stack>
  );
});

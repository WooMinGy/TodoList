import { FC } from 'react';

import { TodoCardSkeleton } from '@/components/atoms';
import { Stack } from '@/components/layouts';
import { spacing } from '@/components/theme';

type ITodoListSkeletonProps = {};

export const TodoListSkeleton: FC<ITodoListSkeletonProps> = () => {
  return (
    <Stack space={spacing['4-x']} paddingX={spacing['4-x']} paddingY={spacing['6-x']}>
      <TodoCardSkeleton />
      <TodoCardSkeleton />
      <TodoCardSkeleton />
      <TodoCardSkeleton />
    </Stack>
  );
};

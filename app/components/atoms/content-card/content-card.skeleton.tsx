import { FC } from 'react';

import { Skeleton } from '@/components/atoms';
import { Box } from '@/components/layouts';
import { radius, size, spacing } from '@/components/theme';

type IContentCardSkeletonProps = {};

export const ContentCardSkeleton: FC<IContentCardSkeletonProps> = () => {
  return (
    <Box paddingX={spacing['4-x']} paddingY={spacing['6-x']}>
      <Skeleton style={{ width: '100%', height: size['60-x'], borderRadius: radius['3-x'] }} />
    </Box>
  );
};

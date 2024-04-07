import { FC } from 'react';

import { radius, size } from '@/components/theme';

import { Skeleton } from '../skeleton';

type ITodoCardSkeletonProps = {};

export const TodoCardSkeleton: FC<ITodoCardSkeletonProps> = () => {
  return <Skeleton style={{ width: '100%', height: size['35-x'], borderRadius: radius['3-x'] }} />;
};

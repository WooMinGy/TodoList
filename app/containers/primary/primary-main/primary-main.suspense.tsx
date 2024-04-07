import { FC } from 'react';

import { TodoListSkeleton } from '@/components';

import { PrimaryMainLayout } from './primary-main.layout';
import { PrimaryMainCTAView, PrimaryMainHeaderView } from './views';

type IPrimaryMainSuspenseProps = {};

export const PrimaryMainSuspense: FC<IPrimaryMainSuspenseProps> = () => {
  return (
    <PrimaryMainLayout
      header={<PrimaryMainHeaderView />}
      content={<TodoListSkeleton />}
      footer={<PrimaryMainCTAView onPress={() => {}} />}
    />
  );
};

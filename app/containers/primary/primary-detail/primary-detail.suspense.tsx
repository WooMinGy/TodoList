import { FC } from 'react';

import { ContentCardSkeleton } from '@/components';

import { PrimaryDetailLayout } from './primary-detail.layout';
import { PrimaryDetailCTAView, PrimaryDetailHeaderView } from './views';

type IPrimaryDetailSuspenseProps = {};

export const PrimaryDetailSuspense: FC<IPrimaryDetailSuspenseProps> = () => {
  return (
    <PrimaryDetailLayout
      header={<PrimaryDetailHeaderView onPressBackButton={() => {}} />}
      content={<ContentCardSkeleton />}
      footer={
        <PrimaryDetailCTAView isDone={false} onPressEdit={() => {}} onPressToggle={() => {}} />
      }
    />
  );
};

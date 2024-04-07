import { memo } from 'react';

import { HeaderOrganism } from '@/components';

type IPrimaryMainHeaderViewProps = {};

export const PrimaryMainHeaderView = memo<IPrimaryMainHeaderViewProps>(({}) => {
  return <HeaderOrganism title="My Todo List" />;
});

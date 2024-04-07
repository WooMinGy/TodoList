import { memo, useCallback } from 'react';

import { HeaderOrganism } from '@/components';

type IPrimaryDetailHeaderViewProps = {
  onPressBackButton: () => void;
};

export const PrimaryDetailHeaderView = memo<IPrimaryDetailHeaderViewProps>(
  ({ onPressBackButton }) => {
    const handlePressBackButton = useCallback(() => {
      onPressBackButton();
    }, []);

    return (
      <HeaderOrganism
        title="Detail"
        backButton={{
          name: 'arrow-left',
          onPress: handlePressBackButton,
        }}
      />
    );
  },
);

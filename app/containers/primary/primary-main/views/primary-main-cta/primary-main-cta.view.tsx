import { memo, useCallback } from 'react';

import { CTASectionMolecule } from '@/components/molecules';

type IPrimaryMainCTAViewProps = {
  onPress: Util<void, void>;
};

export const PrimaryMainCTAView = memo<IPrimaryMainCTAViewProps>(({ onPress }) => {
  const handlePressCTA = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <CTASectionMolecule
      buttons={[
        {
          label: '추가하기',
          ctaMode: 'primary',
          onPress: handlePressCTA,
        },
      ]}
    />
  );
});

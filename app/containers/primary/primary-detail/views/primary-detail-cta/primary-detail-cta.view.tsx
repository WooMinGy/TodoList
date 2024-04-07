import { memo, useCallback } from 'react';

import { CTASectionMolecule } from '@/components/molecules';

type IPrimaryDetailCTAViewProps = {
  isDone: boolean;
  onPressEdit: () => void;
  onPressToggle: () => void;
};

export const PrimaryDetailCTAView = memo<IPrimaryDetailCTAViewProps>(
  ({ isDone, onPressEdit, onPressToggle }) => {
    const isEditButtonDisabled = isDone;

    const handlePressEdit = useCallback(() => {
      onPressEdit();
    }, [onPressEdit]);

    const handlePressToggle = useCallback(() => {
      onPressToggle();
    }, [onPressToggle]);

    return (
      <CTASectionMolecule
        buttons={[
          {
            label: '수정하기',
            ctaMode: 'secondary',
            onPress: handlePressEdit,
            disabled: isEditButtonDisabled,
          },
          {
            label: isDone ? '취소하기' : '완료하기',
            ctaMode: 'primary',
            onPress: handlePressToggle,
          },
        ]}
      />
    );
  },
);

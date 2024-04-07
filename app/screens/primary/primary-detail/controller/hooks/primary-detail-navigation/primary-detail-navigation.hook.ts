import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { PrimaryDetailScreenNavigationProp } from '../../..';

type IPrimaryDetailNavigationInput = void;
type IPrimaryDetailNavigationOutput = {
  goBack: Util<void, void>;
};

export const usePrimaryDetailNavigation: Hook<
  IPrimaryDetailNavigationInput,
  IPrimaryDetailNavigationOutput
> = () => {
  const navigation = useNavigation<PrimaryDetailScreenNavigationProp>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return { goBack };
};

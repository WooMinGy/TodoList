import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { PrimaryMainScreenNavigationProp } from '../../../primary-main.screen';

type IPrimaryMainNavigationInput = void;
type IPrimaryMainNavigationOutput = {
  goDetailScreen: Util<number, void>;
};

export const usePrimaryMainNavigation: Hook<
  IPrimaryMainNavigationInput,
  IPrimaryMainNavigationOutput
> = () => {
  const navigation = useNavigation<PrimaryMainScreenNavigationProp>();

  const goDetailScreen = useCallback((id: number) => {
    navigation.navigate('PrimaryDetailScreen', {
      id,
    });
  }, []);

  return { goDetailScreen };
};

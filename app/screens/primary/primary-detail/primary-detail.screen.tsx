import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FC } from 'react';

import { PrimaryDetailContainer, PrimaryDetailSuspense } from '@/containers';

import { PrimaryStackNavigationProp, PrimaryStackParamList } from '../primary.stack';

import { usePrimaryDetailController } from './controller';

export type PrimaryDetailScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PrimaryStackParamList, 'PrimaryDetailScreen'>,
  PrimaryStackNavigationProp
>;

export type PrimaryDetailScreenRouteProp = RouteProp<PrimaryStackParamList, 'PrimaryDetailScreen'>;

export type IPrimaryDetailScreenProps = {
  navigation: PrimaryDetailScreenNavigationProp;
  route: PrimaryDetailScreenRouteProp;
};

export const PrimaryDetailScreen: FC<IPrimaryDetailScreenProps> = () => {
  const { currentTodo, goBack, openEditTodo, openDeleteTodo, toggleTodo } =
    usePrimaryDetailController();

  if (!currentTodo) {
    return <PrimaryDetailSuspense />;
  }

  return (
    <PrimaryDetailContainer
      currentTodo={currentTodo}
      pressBackButton={goBack}
      pressRemove={openDeleteTodo}
      pressEdit={openEditTodo}
      pressToggle={toggleTodo}
    />
  );
};

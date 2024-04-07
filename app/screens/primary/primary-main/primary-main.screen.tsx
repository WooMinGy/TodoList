import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FC } from 'react';

import { PrimaryMainContainer, PrimaryMainSuspense } from '@/containers';

import { PrimaryStackNavigationProp, PrimaryStackParamList } from '../primary.stack';

import { usePrimaryMainController } from './controller';

export type PrimaryMainScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PrimaryStackParamList, 'PrimaryMainScreen'>,
  PrimaryStackNavigationProp
>;

export type PrimaryMainScreenRouteProp = RouteProp<PrimaryStackParamList, 'PrimaryMainScreen'>;

export type IPrimaryMainScreenProps = {
  navigation: PrimaryMainScreenNavigationProp;
  route: PrimaryMainScreenRouteProp;
};

export const PrimaryMainScreen: FC<IPrimaryMainScreenProps> = () => {
  const {
    currentTodos,
    hasMoreTodos,
    goDetailScreen,
    openAddTodo,
    openDeleteTodo,
    toggleIsDone,
    fetchMore,
    refresh,
  } = usePrimaryMainController();

  if (!currentTodos) {
    return <PrimaryMainSuspense />;
  }

  return (
    <PrimaryMainContainer
      todoList={currentTodos}
      hasMoreTodos={hasMoreTodos}
      pressCard={goDetailScreen}
      pressCTA={openAddTodo}
      pressCheck={toggleIsDone}
      pressRemove={openDeleteTodo}
      fetchMore={fetchMore}
      refresh={refresh}
    />
  );
};

import { FC } from 'react';

import { PrimaryMainLayout } from './primary-main.layout';
import { PrimaryMainCTAView, PrimaryMainHeaderView, PrimaryMainListView } from './views';

import { ITodos } from '@/redux';

type IPrimaryMainContainerProps = {
  todoList: ITodos;
  hasMoreTodos: boolean;
  pressCard: Util<number, void>;
  pressCTA: Util<void, void>;
  pressCheck: Util<number, void>;
  pressRemove: Util<number, void>;
  fetchMore: Util<void, void>;
  refresh: Util<void, void>;
};

export const PrimaryMainContainer: FC<IPrimaryMainContainerProps> = ({
  todoList,
  hasMoreTodos,
  pressCard,
  pressCTA,
  pressCheck,
  pressRemove,
  fetchMore,
  refresh,
}) => {
  return (
    <PrimaryMainLayout
      header={<PrimaryMainHeaderView />}
      content={
        <PrimaryMainListView
          todoList={todoList}
          hasMoreTodos={hasMoreTodos}
          onPressCard={pressCard}
          onPressCheck={pressCheck}
          onPressRemove={pressRemove}
          onFetchMore={fetchMore}
          onRefresh={refresh}
        />
      }
      footer={<PrimaryMainCTAView onPress={pressCTA} />}
    />
  );
};

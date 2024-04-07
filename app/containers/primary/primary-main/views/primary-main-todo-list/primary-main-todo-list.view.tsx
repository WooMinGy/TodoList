import { memo } from 'react';

import { TodoListOrganism } from '@/components';

import { ITodos } from '@/redux';

type IPrimaryMainListViewProps = {
  todoList: ITodos;
  hasMoreTodos: boolean;
  onPressCard: Util<number, void>;
  onPressCheck: Util<number, void>;
  onPressRemove: Util<number, void>;
  onFetchMore: Util<void, void>;
  onRefresh: Util<void, void>;
};

export const PrimaryMainListView = memo<IPrimaryMainListViewProps>(
  ({
    todoList,
    hasMoreTodos,
    onPressCard,
    onPressCheck,
    onPressRemove,
    onFetchMore,
    onRefresh,
  }) => {
    return (
      <TodoListOrganism
        todoList={todoList}
        hasMoreTodos={hasMoreTodos}
        onFetchMore={onFetchMore}
        onRefresh={onRefresh}
        onPressCard={onPressCard}
        onCheck={onPressCheck}
        onRemove={onPressRemove}
      />
    );
  },
);

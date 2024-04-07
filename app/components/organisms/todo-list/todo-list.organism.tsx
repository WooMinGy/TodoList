// import { FlashList } from '@shopify/flash-list';
import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';
import { RefreshControl } from 'react-native';

import {
  Box,
  ITodoCardAtomProps,
  TodoCardAtom,
  TodoCardSkeleton,
  palette,
  size,
  spacing,
} from '@/components';

type ITodo = Omit<ITodoCardAtomProps, 'onPressCard' | 'onCheck' | 'onRemove'>;
type ITodos = ITodo[];

type ITodoListOrganismProps = {
  todoList: ITodos;
  hasMoreTodos: boolean;
  onRefresh: Util<void, void>;
  onFetchMore: Util<void, void>;
  onPressCard: Util<number, void>;
  onCheck: Util<number, void>;
  onRemove: Util<number, void>;
};

export const TodoListOrganism = memo<ITodoListOrganismProps>(
  ({ todoList, hasMoreTodos, onRefresh, onFetchMore, onPressCard, onCheck, onRemove }) => {
    return (
      <FlashList
        contentContainerStyle={{
          paddingHorizontal: spacing['4-x'],
          paddingVertical: spacing['6-x'],
        }}
        estimatedItemSize={size['35-x']}
        ItemSeparatorComponent={() => <Box style={{ height: spacing['4-x'] }} />}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={false}
            colors={[palette['primaryBlue']]}
            tintColor={palette['primaryBlue']}
          />
        }
        onEndReachedThreshold={0.2}
        onEndReached={onFetchMore}
        ListFooterComponent={
          hasMoreTodos ? (
            <Box
              paddingX={spacing['4-x']}
              paddingY={spacing['6-x']}
              style={{ backgroundColor: palette['onPrimary'] }}
            >
              <TodoCardSkeleton />
            </Box>
          ) : null
        }
        data={todoList}
        renderItem={(props) => {
          const {
            item: { id, content, isDone },
          } = props;

          const handlePressCard = () => {
            onPressCard(id);
          };

          const handlePressCheck = () => {
            onCheck(id);
          };

          const handlePressRemove = () => {
            onRemove(id);
          };

          return (
            <TodoCardAtom
              key={id}
              id={id}
              content={content}
              isDone={isDone}
              onPressCard={handlePressCard}
              onCheck={handlePressCheck}
              onRemove={handlePressRemove}
            />
          );
        }}
      />
    );
  },
);

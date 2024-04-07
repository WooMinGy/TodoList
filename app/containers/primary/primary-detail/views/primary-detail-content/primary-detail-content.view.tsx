import { memo } from 'react';

import { ContentCardAtom } from '@/components';

import { ITodo } from '@/redux';

type IPrimaryDetailContentViewProps = {
  currentTodo: ITodo;
  onRemove: Util<void, void>;
};

export const PrimaryDetailContentView = memo<IPrimaryDetailContentViewProps>(
  ({ currentTodo, onRemove }) => {
    const { content, isDone } = currentTodo;

    return <ContentCardAtom content={content} isDone={isDone} onRemove={onRemove} />;
  },
);

import { FC } from 'react';

import { PrimaryDetailLayout } from './primary-detail.layout';
import { PrimaryDetailCTAView, PrimaryDetailContentView, PrimaryDetailHeaderView } from './views';

import { ITodo } from '@/redux';

type IPrimaryDetailContainerProps = {
  currentTodo: ITodo;
  pressBackButton: Util<void, void>;
  pressRemove: Util<void, void>;
  pressEdit: Util<void, void>;
  pressToggle: Util<void, void>;
};

export const PrimaryDetailContainer: FC<IPrimaryDetailContainerProps> = ({
  currentTodo,
  pressBackButton,
  pressRemove,
  pressEdit,
  pressToggle,
}) => {
  return (
    <PrimaryDetailLayout
      header={<PrimaryDetailHeaderView onPressBackButton={pressBackButton} />}
      content={<PrimaryDetailContentView currentTodo={currentTodo} onRemove={pressRemove} />}
      footer={
        <PrimaryDetailCTAView
          isDone={currentTodo.isDone}
          onPressEdit={pressEdit}
          onPressToggle={pressToggle}
        />
      }
    />
  );
};

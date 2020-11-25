import * as React from 'react';
import SortableTree from 'react-sortable-tree';
import { Avatar } from './Avatar';
import { GlobalContext, GlobalProvider } from './StoreProvider';

export interface AppProps {
  title: string;
  author: string;
}

type Avatar = {
  title: string;
  subtitle?: string;
  children?: Avatar[];
};
type LocalState = {
  treeData: Avatar[];
};

const initialState: LocalState = {
  treeData: [
    {
      title:
        'Ordered tree を React で描画する場合、スタックに注意する必要があるはず。調査すること。',
      subtitle: 'ToDo[1]',
      children: [
        {
          title: '参考',
          children: [
            {
              title: 'React Sortable Tree',
              children: [
                { title: 'https://github.com/frontend-collective/react-sortable-tree' },
                { title: '全体をドラッグできるようにしたもの' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'React Sortable Tree を使ってみて、データ構造と描画方法を確認する',
      children: [
        {
          title: 'データ構造',
        },
      ],
    },
  ],
};

export const AvatarGraph = () => {
  const [todoItemsState, persistentStoreDispatch] = React.useContext(
    GlobalContext
  ) as GlobalProvider;
  const handleClickNewButton = () => {
    persistentStoreDispatch({
      type: 'todoitem-put',
      payload: {
        id: '',
        title: 'Rip my CD ',
        updatedAt: Date.now(),
        completed: false,
      },
    });
  };
  const handleClickDeleteButton = (id: string) => {
    persistentStoreDispatch({
      type: 'todoitem-delete',
      payload: id,
    });
  };
  const graph = {
    0: {},
  };
  const list = Object.keys(graph).map(item => {
    return <Avatar />;
  });
  const [state, setState] = React.useState(initialState);
  const [state2, setState2] = React.useState(initialState);

  // Use same dndType for dragging and drop among SortableTrees
  return (
    <div style={{ height: 400 }}>
      Avatar Graph
      <br />
      <SortableTree
        dndType='avatargraph'
        treeData={state.treeData}
        onChange={(treeData: Avatar[]) => setState({ treeData })}
      ></SortableTree>
      <SortableTree
        dndType='avatargraph'
        treeData={state2.treeData}
        onChange={(treeData: Avatar[]) => setState2({ treeData })}
      ></SortableTree>
    </div>
  );
};

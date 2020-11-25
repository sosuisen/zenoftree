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
  children?: Avatar[];
};
type LocalState = {
  treeData: Avatar[];
};

const initialState: LocalState = {
  treeData: [
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'fingerline' }] },
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
  return (
    <div style={{ height: 400 }}>
      Avatar Graph
      <br />
      <SortableTree
        treeData={state.treeData}
        onChange={(treeData: Avatar[]) => setState({ treeData })}
      ></SortableTree>
    </div>
  );
};

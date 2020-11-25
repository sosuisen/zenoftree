import * as React from 'react';
import { GlobalContext, GlobalProvider } from './StoreProvider';

type OperationMode = 'View' | 'Edit';

type LocalState = {
  operationMode: OperationMode;
};
const initialLocalState: LocalState = {
  operationMode: 'View',
};

export const Avatar = () => {
  const [state, setState] = React.useState(initialLocalState);
  const [todoItemsState, persistentStoreDispatch] = React.useContext(
    GlobalContext
  ) as GlobalProvider;
  const avatar =
    state.operationMode === 'View' ? (
      <div onClick={() => setState({ operationMode: 'Edit' })}>View</div>
    ) : (
      <textarea></textarea>
    );
  return avatar;
};

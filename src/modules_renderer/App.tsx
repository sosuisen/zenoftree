import * as React from 'react';
import './App.css';
import { StoreProvider } from './StoreProvider';
import { AvatarGraph } from './AvatarGraph';

export const App = () => {
  return (
    <div styleName='zenoftree'>
      <StoreProvider>
        <AvatarGraph />
      </StoreProvider>
    </div>
  );
};

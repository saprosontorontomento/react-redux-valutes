import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

import Test from './Test';



const App = () => {
  return (
    <Provider store={store}>
      <Test/>
    </Provider>
  );
};

export default App;

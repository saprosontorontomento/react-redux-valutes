import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Header from '../Header/Header';



const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route  path="/valutes" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default App;

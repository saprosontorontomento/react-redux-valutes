import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Main from '../Main/Main';
import Header from '../Header/Header';
import News from '../News/News';



const App = () => {
  return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route  path="/news" component={News} />
            <Route  path="/valutes" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default App;

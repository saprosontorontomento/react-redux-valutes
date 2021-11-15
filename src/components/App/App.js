import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from '../Header/Header';
import News from '../News/News';
import Valutes from '../Valutes/Valutes';



const App = () => {
  return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route  path="/news" component={News} />
            <Route  path="/valutes" component={Valutes} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default App;

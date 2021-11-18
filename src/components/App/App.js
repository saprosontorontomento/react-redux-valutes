import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

import Header from '../Header/Header';
import News from '../News/News';
import Valutes from '../Valutes/Valutes';
import Error from '../Error/Error';



const App = () => {
  return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Switch>
            <Route exact path="/"/>
            <Route  path="/news" component={News} />
            <Route  path="/valutes" component={Valutes} />
            <Route  path="/error" component={Error} />
            <Redirect to="/error"/>
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default App;

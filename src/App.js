import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import logo from './logo.svg';
import './App.css';

import rootReducer from './rootReducer';

import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import Toggle from './components/Toggle';

const middleware = [logger];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <main className="App-main">
          <Toggle />
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MovieDetails} />
          </Switch>
        </main>
      </div>
    </Router>
  </Provider>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from '../store/configureStore';
const { store, persistor } = configureStore();

import baseStyles from '../styled-components/baseStyles';

import Home from './Home';
import Events from './Events';
import Event from './Event';

const Root = () => {
  baseStyles();
  return (
    <Provider store={store}>
      <PersistGate loading="loading..." persistor={persistor}>
        <Router>
          <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Events} />
            <Route exact path="/event/:id" component={Event} />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Root;

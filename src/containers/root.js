import React from 'react';
// import {HashRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from '../store/configureStore';
const { store, persistor } = configureStore();

import baseStyles from '../styled-components/baseStyles';

import Home from './Home';
import CreateEvent from './CreateEvent';
import Events from './Events';
import Event from './Event';
import PrivacyPolicy from './PrivacyPolicy';

const Root = () => {
  baseStyles();
  return (
    <Provider store={store}>
      <PersistGate loading="loading..." persistor={persistor}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-event" component={CreateEvent} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/event/:id" component={Event} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Root;

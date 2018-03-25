// import { localeReducer as locale } from 'react-localize-redux';
import { combineReducers } from 'redux';

import system from '../containers/System/reducers';
import events from '../containers/Events/reducers';

const rootReducer = combineReducers({
  system,
  events
});

export default rootReducer;

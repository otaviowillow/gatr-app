// import { localeReducer as locale } from 'react-localize-redux';
import { combineReducers } from 'redux';

import system from '../containers/System/reducers';
import event from '../containers/Event/reducers';
import events from '../containers/Events/reducers';
import createEvent from '../containers/CreateEvent/reducers';

const rootReducer = combineReducers({
  system,
  event,
  events,
  createEvent
});

export default rootReducer;

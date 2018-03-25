// import { localeReducer as locale } from 'react-localize-redux';
import { combineReducers } from 'redux';

import system from '../containers/System/reducers';
import main from '../containers/Main/reducers';

const rootReducer = combineReducers({
  system,
  main
});

export default rootReducer;

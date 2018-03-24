// import { localeReducer as locale } from 'react-localize-redux';
import { combineReducers } from 'redux';

import main from '../containers/Main/reducers';

const rootReducer = combineReducers({
  main
});

export default rootReducer;

import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';

import { watchGetEventsForLocation } from '../containers/Main/sagas';

export default function* rootSaga() {
  yield all([
    watchGetEventsForLocation()
  ]);
}

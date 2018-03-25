import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'https://dev.api.gatrapp.com';

export function* handleEventsForLocation() {
  yield put({type: 'IS_AUTHENTICATED'});
  try {
    yield console.log(response);
  } catch(error) {
    yield console.log(error);
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error});
  }
  yield put({type: 'DONE_AUTHENTICATED'});
}

export function* watchLoginRequests() {
  yield takeEvery('LOGIN_WITH_FACEBOOK', handleEventsForLocation);
}

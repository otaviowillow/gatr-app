import { takeEvery, put, select, call } from 'redux-saga/effects';
import axios from 'axios';

const currentUser = state => state.system.user;

const AUTH_TOKEN = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.baseURL = 'https://dev.api.gatrapp.com';
axios.defaults.headers.common['api-key'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function* handleEvent() {
  yield put({type: 'IS_FETCHING_EVENT'});
  try {
    const user = yield select(currentUser);

    yield put({type: 'SET_EVENT', payload: response.data.data});
  } catch(error) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error.response.data.errors});
  }
  yield put({type: 'DONE_FETCHING_EVENT'});
}

export function* watchGetEvent() {
  yield takeEvery('GET_EVENT', handleEvent);
}

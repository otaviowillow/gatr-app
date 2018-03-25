import { takeEvery, put, select, call } from 'redux-saga/effects';
import axios from 'axios';

const currentUser = state => state.system.user;

const AUTH_TOKEN = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.baseURL = 'https://dev.api.gatrapp.com';
axios.defaults.headers.common['api-key'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function* handleEventsForLocation() {
  yield put({type: 'IS_FETCHING_MAIN'});
  try {
    const user = yield select(currentUser);
    const bearer = 'Bearer ' + user.accessToken;

    const response = yield call(axios.get, '/search', {
      params: {
        lat: 49.2753861,
        lng: -123.115381,
        distance: 800
      }, headers: {
        Authorization: bearer
      }
    });
    yield put({type: 'SET_EVENTS_SUCCESS', payload: response.data.data});
  } catch(error) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error.response.data.errors});
  }
  yield put({type: 'DONE_FETCHING_MAIN'});
}

export function* watchGetEventsForLocation() {
  yield takeEvery('GET_EVENTS_FOR_LOCATION', handleEventsForLocation);
}

import { takeEvery, put, select, call } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'https://dev.api.gatrapp.com';
axios.defaults.headers.common['api-key'] = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const currentUser = state => state.system.user;
const currentLoc = state => state.events.loc;

export function* handleEventsForLocation() {
  yield put({type: 'IS_FETCHING_MAIN'});
  try {
    const user = yield select(currentUser);
    const loc = yield select(currentLoc);
    const bearer = 'Bearer ' + user.accessToken;

    const response = yield call(axios.get, '/search', {
      params: {
        lat: loc.center.lat,
        lng: loc.center.lng,
        distance: 800
      }, headers: {
        Authorization: bearer
      }
    });
    yield put({type: 'SET_EVENTS', payload: response.data.data});
  } catch(error) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error.response.data.errors});
  }
  yield put({type: 'DONE_FETCHING_MAIN'});
}

export function* watchGetEventsForLocation() {
  yield takeEvery('GET_EVENTS_FOR_LOCATION', handleEventsForLocation);
}

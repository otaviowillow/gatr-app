import { replace } from 'react-router-redux';
import { takeEvery, put, select, call } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'https://api.gatrapp.com';
axios.defaults.headers.common['api-key'] = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const currentUser = state => state.system.user;
const currentTimer = state => state.events.timer;
const currentLoc = state => state.events.loc;

const isCooldown = cooldownTimer => {
  const currentTimeInSeconds = Math.floor(Date.now());
  return currentTimeInSeconds > cooldownTimer;
};

function* fetchEvents() {
  let results = {};
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
    yield put({type: 'SET_UPDATE_TIMER', payload: Math.floor(Date.now()) + 1000}); // Adds a cooldown so we can't spam requests
    yield results = response.data.data;
  } catch(e) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error.response.data.errors});
  } finally {
    return results;
  }
}

export function* handleEventsForLocation() {
  const cooldownTimer = yield select(currentTimer);
  if(!isCooldown(cooldownTimer)) return;
  yield put({type: 'IS_FETCHING_ALL_EVENTS'});
  const response = yield* fetchEvents();
  yield put({type: 'SET_EVENTS', payload: response});
  yield put({type: 'DONE_FETCHING_ALL_EVENTS'});
}

export function* handleMapCenterChange() {
  const loc = yield select(currentLoc);
  const url = '/events?' + qs.stringify(loc.center);
  const cooldownTimer = yield select(currentTimer);
  if(!isCooldown(cooldownTimer)) return;
  yield put({type: 'IS_FETCHING_EVENTS_NEW_CENTER'});
  const response = yield* fetchEvents();
  yield put({type: 'SET_EVENTS', payload: response});
  yield put(replace(url));

  yield put({type: 'DONE_FETCHING_EVENTS_NEW_CENTER'});
}

export function* watchGetEventsForLocation() {
  yield takeEvery('GET_EVENTS_FOR_LOCATION', handleEventsForLocation);
  yield takeEvery('GET_EVENTS_WITH_NEW_CENTER', handleMapCenterChange);
}

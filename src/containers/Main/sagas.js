import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'https://dev.api.gatrapp.com';

export function* handleEventsForLocation() {
  yield put({type: 'IS_FETCHING_MAIN'});
  try {
    const response = yield call(axios.get, '/search', {
      params: {
        lat: 49.2753861,
        long: -123.115381,
        distance: 800
      }
    });
    yield console.log(response);
    // yield put({type: 'SET_EVENTS_SUCCESS', payload: response.data.data});
  } catch(error) {
    yield console.log(error);
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error});
  }
  yield put({type: 'DONE_FETCHING_MAIN'});
}

export function* watchGetEventsForLocation() {
  yield takeEvery('GET_EVENTS_FOR_LOCATION', handleEventsForLocation);
}

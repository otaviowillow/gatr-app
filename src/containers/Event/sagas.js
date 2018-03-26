import { takeEvery, put, select, call } from 'redux-saga/effects';
import axios from 'axios';

const currentUser = state => state.system.user;
const currentItemId = state => state.event.item.id;

const AUTH_TOKEN = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.baseURL = 'https://dev.api.gatrapp.com';
axios.defaults.headers.common['api-key'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function* handleEvent() {
  yield put({type: 'IS_FETCHING_EVENT'});
  try {
    const user = yield select(currentUser);
    const bearer = 'Bearer ' + user.accessToken;
    const itemId = yield select(currentItemId);
    const response = yield call(axios.get, '/events/' + itemId, {
      headers: {
        Authorization: bearer
      }
    });
    yield console.log(response.data.data);
    yield put({type: 'SET_EVENT', payload: response.data.data});
  } catch(error) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error});
  }
  yield put({type: 'DONE_FETCHING_EVENT'});
}

export function* watchGetEvent() {
  yield takeEvery('GET_EVENT', handleEvent);
}

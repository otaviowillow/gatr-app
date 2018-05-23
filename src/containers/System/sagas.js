import { takeEvery, put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

const AUTH_TOKEN = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.baseURL = 'https://dev.api.gatrapp.com';
axios.defaults.headers.common['api-key'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const currentFacebookToken = state => state.system.facebookToken;

export function* handleLogin() {
  yield put({type: 'IS_GETTING_AUTHENTICATED'});
  try {
    const facebookToken = yield select(currentFacebookToken);
    const response = yield call(axios.post, '/auth/facebook', {
      access_token: facebookToken
    });
    yield put({type: 'SET_USER', payload: response.data.data});
    yield put({type: 'SET_USER_AUTH', payload: true});
    yield put(push('/events?lat=49.2753714&lng=-123.1153594'));
    window.location.reload();
  } catch(error) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error});
  }
  yield put({type: 'DONE_GETTING_AUTHENTICATED'});
}

export function* watchLoginRequests() {
  yield takeEvery('LOGIN_WITH_FACEBOOK', handleLogin);
}

import { takeEvery, put } from 'redux-saga/effects';
// import axios from 'axios';

export function* handleAuctions() {
  yield put({type: 'IS_FETCHING_MAIN'});
  try {
    yield console.log('works');
  } catch(error) {
    yield put({type: 'DISPLAY_ERROR_MESSAGE', payload: error});
  }
  yield put({type: 'DONE_FETCHING_MAIN'});
}

export function* watchMain() {
  yield takeEvery('GET_AUCTIONS', handleAuctions);
}

import { replace } from 'react-router-redux';
// import { takeEvery, put, select, call } from 'redux-saga/effects';
import { takeEvery, put, select } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'https://api.gatrapp.com';
axios.defaults.headers.common['api-key'] = '4d998ffb35d41368af53d9e4f49bfe82';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const currentTimer = state => state.events.timer;
// const currentUser = state => state.system.user;
const currentLoc = state => state.events.loc;

const isCooldown = cooldownTimer => {
  const currentTimeInSeconds = Math.floor(Date.now());
  return currentTimeInSeconds > cooldownTimer;
};

function* fetchEvents() {
  let results = {};
  try {
    // const user = yield select(currentUser);
    // const loc = yield select(currentLoc);
    // const bearer = 'Bearer ' + user.accessToken;

    // const response = yield call(axios.get, '/search', {
    //   params: {
    //     lat: loc.center.lat,
    //     lng: loc.center.lng,
    //     distance: 800
    //   }, headers: {
    //     Authorization: bearer
    //   }
    // });
    const response = {
      data: {
        "data": [
          {
            "id": "1344113275687307",
            "name": "Test Event",
            "type": false,
            "coverPicture": "http://bandungtourexpert.com/wp-content/uploads/bandung-night-life.jpg",
            "profilePicture": null,
            "description": "Any description",
            "distance": null,
            "startTime": "2017-08-09T13:00:00.000Z",
            "endTime": "2017-08-09T15:00:00.000Z",
            "timeFromNow": null,
            "category": null,
            "stats": {
              "attending": 0,
              "declined": 0,
              "maybe": 0,
              "noreply": 0
            },
            "gatrDetails": {
              "eventId": "59c06fa9d6f31910e089940f",
              "private": false,
              "people": {
                "going": [],
                "interested": []
              },
              "createdAt": "2017-09-19T01:15:21.767Z",
              "updatedAt": "2017-09-19T01:15:21.767Z"
            },
            "venue": {
              "name": "Venue name",
              "location": {
                "city": "Test city",
                "country": "Test country",
                "latitude": 49.2753861,
                "longitude": -123.115381,
                "state": null,
                "street": "Test street",
                "neighborhood": "Test neighborhood",
                "number": "3",
                "zipcode": "11065999",
              }
            }
          }
        ]
      }
    };
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

const events = (state = {
  isFetching: true,
  loc: {
    lat: '',
    lng: '',
    distance: '',
    zoom: ''
  },
  list: []
}, action) => {
  switch (action.type) {
    case "IS_FETCHING_MAIN":
      return {
        ...state,
        isFetching: true
      };
    case "DONE_FETCHING_MAIN":
      return {
        ...state,
        isFetching: false
      };
    case "SET_EVENTS":
      console.log(action.payload);
      return {
        ...state,
        list: action.payload
      };
    case "GET_EVENTS_FOR_LOCATION":
      return {
        ...state,
        loc: {
          ...state.loc,
          lng: action.payload.lng,
          lat: action.payload.lat
        }
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default events;

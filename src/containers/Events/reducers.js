const events = (state = {
  isFetching: true,
  loc: {
    center: {
      lat: 49.2753861,
      lng: -123.115381
    },
    distance: '',
    zoom: 15
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
      return {
        ...state,
        list: action.payload
      };
    case "GET_EVENTS_FOR_LOCATION":
      return {
        ...state,
        loc: {
          ...state.loc,
          center: action.payload
        }
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default events;

const events = (state = {
  isFetching: {
    all: false,
    events: false
  },
  hoveredId: 0,
  timer: 0,
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
    case "IS_FETCHING_ALL_EVENTS":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          all: true
        }
      };
    case "IS_FETCHING_EVENTS_NEW_CENTER":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          events: true
        }
      };
    case "DONE_FETCHING_ALL_EVENTS":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          all: false
        }
      };
    case "DONE_FETCHING_EVENTS_NEW_CENTER":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          events: false
        }
      };
    case "SET_EVENTS":
      return {
        ...state,
        list: action.payload
      };
    case "SELECT_EVENT":
      return {
        ...state,
        hoveredId: action.payload
      };
    case "SET_UPDATE_TIMER":
      return {
        ...state,
        timer: action.payload
      };
    case "GET_EVENTS_WITH_NEW_CENTER":
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

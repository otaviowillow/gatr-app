const main = (state = {
  isFetching: false,
  currentEvents: {}
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
    case "GET_EVENTS_FOR_LOCATION":
      return {
        ...state,
        currentEvents: {
          ...state.currentEvents,
          loc: action.payload
        }
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default main;

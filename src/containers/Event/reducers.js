const events = (state = {
  isFetching: false,
  item: {}
}, action) => {
  switch (action.type) {
    case "IS_FETCHING_EVENT":
      return {
        ...state,
        isFetching: true
      };
    case "DONE_FETCHING_EVENT":
      return {
        ...state,
        isFetching: false
      };
    case "SET_EVENT":
      return {
        ...state,
        item: action.payload
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default events;

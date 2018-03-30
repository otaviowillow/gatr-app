const event = (state = {
  isFetching: false,
  item: {
    id: ''
  }
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
    case "GET_EVENT":
      return {
        ...state,
        item: {
          id: action.payload
        }
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

export default event;

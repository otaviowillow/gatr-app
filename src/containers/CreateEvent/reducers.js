const createEvent = (state = {
  isFetching: {
    all: false,
    events: false
  }
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
    case "DONE_FETCHING_ALL_EVENTS":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          all: false
        }
      };
    case "CREATE_EVENT":
      return {
        ...state,
        form: action.payload
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default createEvent;

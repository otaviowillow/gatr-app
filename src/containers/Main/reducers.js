const main = (state = {
  isFetching: false,
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
    default:
      state = state;
      break;
  }
  return state;
};

export default main;

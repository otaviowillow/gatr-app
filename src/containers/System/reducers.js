const system = (state = {
  isAuthenticated: false,
  token: ''
}, action) => {
  switch (action.type) {
    case "IS_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true
      };
    case "DONE_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default system;

const system = (state = {
  isAuthenticating: false,
  isAuthenticated: false,
  facebookToken: '',
  user: {},
}, action) => {
  switch (action.type) {
    case "IS_GETTING_AUTHENTICATED":
      return {
        ...state,
        isAuthenticating: true
      };
    case "DONE_GETTING_AUTHENTICATED":
      return {
        ...state,
        isAuthenticating: false
      };
    case "LOGIN_WITH_FACEBOOK":
      return {
        ...state,
        facebookToken: action.payload
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_USER_AUTH":
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default system;

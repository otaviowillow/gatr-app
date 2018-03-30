export function facebookLogin(token) {
  return {
    type: "LOGIN_WITH_FACEBOOK",
    payload: token
  };
}

export function logOut(token) {
  return {
    type: "LOGOUT_USER",
    payload: token
  };
}

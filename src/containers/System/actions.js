export function facebookLogin(token) {
  return {
    type: "LOGIN_WITH_FACEBOOK",
    payload: token
  };
}

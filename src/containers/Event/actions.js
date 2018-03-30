export function getEvent(id) {
  return {
    type: "GET_EVENT",
    payload: id
  };
}

export function getEvent(id) {
  console.log('get event action');
  return {
    type: "GET_EVENT",
    payload: id
  };
}

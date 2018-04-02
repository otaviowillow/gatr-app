export function createEvent(form) {
  console.log(form);
  return {
    type: "CREATE_EVENT",
    payload: form
  };
}

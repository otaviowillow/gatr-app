export function createEvent(form) {
  return {
    type: "CREATE_EVENT",
    payload: form
  };
}

export function changeAddress(address) {
  return {
    type: "CHANGE_ADDRESS_ON_FORM",
    payload: address
  };
}

export function createEvent(form) {
  return {
    type: "CREATE_EVENT",
    payload: form
  };
}

export function setEventImage(image) {
  return {
    type: "SET_EVENT_IMAGE",
    payload: image
  };
}

export function changeAddress(address) {
  return {
    type: "CHANGE_ADDRESS_ON_FORM",
    payload: address
  };
}

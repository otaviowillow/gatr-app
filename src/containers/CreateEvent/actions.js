export function createEvent(form) {
  return {
    type: "CREATE_EVENT",
    payload: form
  };
}

export function setStartTime(date) {
  return {
    type: "SET_START_TIME",
    payload: date
  };
}

export function setEndTime(date) {
  return {
    type: "SET_END_TIME",
    payload: date
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

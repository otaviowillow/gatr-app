export function getEventsForLocation(loc) {
  return {
    type: "GET_EVENTS_FOR_LOCATION",
    payload: loc
  };
}


export function handleMapCenterChange(loc) {
  return {
    type: "GET_EVENTS_WITH_NEW_CENTER",
    payload: loc
  };
}

export function getMapForPosition(loc) {
  return {
    type: "GET_MAP_FOR_POSITION",
    payload: loc
  };
}

export function selectEvent(id) {
  return {
    type: "SELECT_EVENT",
    payload: id
  };
}

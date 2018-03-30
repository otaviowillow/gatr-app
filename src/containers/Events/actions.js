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

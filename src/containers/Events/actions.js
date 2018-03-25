export function getEventsForLocation(loc) {
  return {
    type: "GET_EVENTS_FOR_LOCATION",
    payload: loc
  };
}

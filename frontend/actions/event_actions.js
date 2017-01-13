import * as EventApiUtil from '../util/event_api_util';

export const REQUEST_EVENTS = "REQUEST_EVENTS";
export const REQUEST_EVENT = "REQUEST_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const requestEvents = events => ({
  type: REQUEST_EVENTS,
  events
});

export const fetchEvents = (cityId) => dispatch => (
  EventApiUtil.fetchEvents(cityId).then(events => dispatch(requestEvents(events)))
);

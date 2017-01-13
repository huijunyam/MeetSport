import * as EventApiUtil from '../util/event_api_util';

export const REQUEST_EVENTS = "REQUEST_EVENTS";
export const REQUEST_EVENT = "REQUEST_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const requestEvents = events => ({
  type: REQUEST_EVENTS,
  events
});

export const requestEvent = eventDetail => ({
  type: REQUEST_EVENT,
  eventDetail
});

export const removeEvent = event => ({
  type: REMOVE_EVENT,
  event
});

export const fetchEvents = (cityId) => dispatch => (
  EventApiUtil.fetchEvents(cityId).then(events => dispatch(requestEvents(events)))
);

export const fetchEvent = (cityId, eventId) => dispatch => (
  EventApiUtil.fetchEvent(cityId, eventId).then(eventDetail => dispatch(requestEvent(eventDetail)))
);

export const createEvent = (cityId, event) => dispatch => (
  EventApiUtil.createEvent(cityId, event).then(eventDetail => dispatch(requestEvent(eventDetail)))
);

export const updateEvent = (cityId, event) => dispatch => (
  EventApiUtil.updateEvent(cityId, event).then(eventDetail => dispatch(requestEvent(eventDetail)))
);

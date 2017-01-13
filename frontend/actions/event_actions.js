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

export const fetchEvent = eventId => dispatch => (
  EventApiUtil.fetchEvent(eventId).then(event => dispatch(requestEvent(event)))
);

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event).then(event => dispatch(requestEvent(event)))
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event).then(event => dispatch(requestEvent(event)))
);

export const joinEvent = attendee => dispatch => (
  EventApiUtil.joinEvent(attendee).then(event => dispatch(requestEvent(event)))
);

export const unjoinEvent = id => dispatch => (
  EventApiUtil.unjoinEvent(id).then(event => dispatch(requestEvent(event)))
);

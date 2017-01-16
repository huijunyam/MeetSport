export const fetchEvents = cityId => (
  $.ajax({
    method: "GET",
    url: `api/cities/${cityId}/events`
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: "GET",
    url: `api/events/${id}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: "POST",
    url: `api/events`,
    data: { event }
  })
);

export const updateEvent = event => (
  $.ajax({
    method: "PATCH",
    url: `api/events/${event.id}`,
    data: { event }
  })
);

export const joinEvent = attendee => (
  $.ajax({
    method: "POST",
    url: `api/events/${attendee.event_id}/attendees`,
    data: { attendee }
  })
);

export const unjoinEvent = id =>  (
  $.ajax({
    method: "DELETE",
    url: `api/attendees/${id}`
  })
);

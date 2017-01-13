export const fetchEvents = (cityId) => (
  $.ajax({
    method: "GET",
    url: `api/cities/${cityId}/events`
  })
);

export const fetchEvent = (cityId, id) => (
  $.ajax({
    method: "GET",
    url: `api/cities/${cityId}/events/${id}`
  })
);

export const createEvent = (cityId, event) => (
  $.ajax({
    method: "POST",
    url: `api/cities/${cityId}/events`,
    data: { event }
  })
);

export const updateEvent = (cityId, event) => (
  $.ajax({
    method: "PATCH",
    url: `api/cities/${cityId}/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = (cityId, id) => (
  $.ajax({
    method: "DELETE",
    url: `api/cities/${cityId}/events/${id}`
  })
);

export const joinEvent = (cityId, attendee) => (
  $.ajax({
    method: "POST",
    url: `api/cities/${cityId}/events/${attendee.event_id}/attendees`
  })
);

export const unjoinEvent = id =>  (
  $.ajax({
    method: "DELETE",
    url: `api/attendees/${id}`
  })
);

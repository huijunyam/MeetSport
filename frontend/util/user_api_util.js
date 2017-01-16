export const getUser = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: { user }
  })
);

export const deleteUser = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/users/${id}`
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: "DELETE",
    url: `api/events/${id}`
  })
);

export const getUser = (id) => (
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  })
);

export const updateUser = (id) => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${id}`
  })
);

export const deleteUser = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/users/${id}`
  })
);

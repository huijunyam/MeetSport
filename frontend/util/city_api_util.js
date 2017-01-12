export const fetchCities = () => (
  $.ajax({
    method: "GET",
    url: "api/cities"
  })
);

export const fetchCity = (id) => (
  $.ajax({
    method: "GET",
    url: `api/cities/${id}`
  })
);

export const deleteCity = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/cities/${id}`
  })
);

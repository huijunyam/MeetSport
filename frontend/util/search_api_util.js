export const fetchSearch = search => (
  $.ajax({
    method: "GET",
    url: `api/events`,
    data: { search }
  })
);

export const fetchCitySearch = (search, cityId) => (
  $.ajax({
    method: "GET",
    url: `api/cities/${cityId}/events`,
    data: { search }
  })
);

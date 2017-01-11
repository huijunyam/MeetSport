export const fetchCities = () => (
  $.ajax({
    method: "GET",
    url: "api/cities"
  })
);

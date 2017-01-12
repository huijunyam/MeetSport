export const selectCity = ({ cities }, id) => {
  const city = cities[id] || {};
  return city;
};

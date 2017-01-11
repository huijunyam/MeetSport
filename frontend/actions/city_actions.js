import * as CityApiUtil from '../util/city_api_util';

export const REQUEST_CITIES = "REQUEST_CITIES";

export const requestCities = (cities) => ({
  type: REQUEST_CITIES,
  cities
});

export const fetchCities = () => dispatch => (
  CityApiUtil.fetchCities().then(cities => dispatch(requestCities(cities)))
);

import * as CityApiUtil from '../util/city_api_util';

export const REQUEST_CITIES = "REQUEST_CITIES";
export const REQUEST_CITY = "REQUEST_CITY";
export const REMOVE_CITY = "REMOVE_CITY";

export const requestCities = (cities) => ({
  type: REQUEST_CITIES,
  cities
});

export const requestCity = (city) => ({
  type: REQUEST_CITY,
  city
});

export const removeCity = (city) => ({
  type: REMOVE_CITY,
  city
});

export const fetchCities = () => dispatch => (
  CityApiUtil.fetchCities().then(cities => dispatch(requestCities(cities)))
);

export const fetchCity = (id) => dispatch => (
  CityApiUtil.fetchCity().then(city => dispatch(requestCity(city)))
);

export const deleteCity = (id) => dispatch => (
  CityApiUtil.deleteCity(id).then(city => dispatch(removeCity(city)))
);

import * as CityApiUtil from '../util/city_api_util';

export const REQUEST_CITIES = "REQUEST_CITIES";
export const REQUEST_CITY = "REQUEST_CITY";
export const REMOVE_CITY = "REMOVE_CITY";

export const requestCities = (cities) => ({
  type: REQUEST_CITIES,
  cities
});

export const requestCity = (cityDetail) => {
  // debugger
  return {
    type: REQUEST_CITY,
    cityDetail
  };
};


export const removeCity = (city) => ({
  type: REMOVE_CITY,
  city
});

export const fetchCities = () => dispatch => (
  CityApiUtil.fetchCities().then(cities => dispatch(requestCities(cities)))
);

export const fetchCity = (id) => dispatch => (
  CityApiUtil.fetchCity(id).then(city => dispatch(requestCity(city)))
);

export const deleteCity = (id) => dispatch => (
  CityApiUtil.deleteCity(id).then(city => dispatch(removeCity(city)))
);

export const joinCity = (membership) => dispatch => (
  CityApiUtil.joinCity(membership).then(city => dispatch(requestCity(city)))
);

export const unjoinCity = (membership) => dispatch => (
  CityApiUtil.unjoinCity(membership).then(city => dispatch(requestCity(city)))
);

import * as SearchApiUtil from '../util/search_api_util';

export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const REQUEST_CATEGORY = "REQUEST_CATEGORY";
export const REQUEST_SEARCH_EVENTS = "REQUEST_SEARCH_EVENTS";

export const requestCategories = categories => ({
  type: REQUEST_CATEGORIES,
  categories
});

export const requestCategory = category => ({
  type: REQUEST_CATEGORY,
  category
});

export const requestSearchEvents = events => ({
  type: REQUEST_SEARCH_EVENTS,
  events
});

export const fetchCategory = id => dispatch => (
  SearchApiUtil.fetchCategory(id).then((category) => dispatch(requestCategory(category)))
);

export const fetchSearch = search => dispatch => (
  SearchApiUtil.fetchSearch(search).then(events => dispatch(requestSearchEvents(events)))
);

export const fetchCitySearch = (search, cityId) => dispatch => (
  SearchApiUtil.fetchCitySearch(search, cityId).then(events => dispatch(requestSearchEvents(events)))
);

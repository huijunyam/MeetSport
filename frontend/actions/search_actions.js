import * as SearchApiUtil from '../util/search_api_util';

export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const REQUEST_CATEGORY = "REQUEST_CATEGORY";

export const requestCategories = categories => ({
  type: REQUEST_CATEGORIES,
  categories
});

export const requestCategory = category => ({
  type: REQUEST_CATEGORY,
  category
});

export const fetchCategory = id => dispatch => (
  SearchApiUtil.fetchCategory(id).then((category) => dispatch(requestCategory(category)))
);

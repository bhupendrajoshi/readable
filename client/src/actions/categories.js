import * as Api from '../utils/api'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories,
    receivedAt: Date.now()
  }
}

function setSelectedCategory(category) {
  return {
    type: SET_SELECTED_CATEGORY,
    selectedCategory: category
  }
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories);
    Api.getCategories().then(data => dispatch(receiveCategories(data.categories)));
  }
}

export function selectCategory(selectedCategory) {
  return (dispatch) => {
    dispatch(setSelectedCategory(selectedCategory));
  }
}
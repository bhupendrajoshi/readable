import * as Api from '../utils/api'

import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, SET_SELECTED_CATEGORY } from './actionTypes';

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
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
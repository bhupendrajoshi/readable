import * as Api from '../utils/api'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts,
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts);
    Api.getPosts().then(posts => dispatch(receivePosts(posts)));
  }
}

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

export function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories);
    Api.getCategories().then(data => dispatch(receiveCategories(data.categories)));
  }
}

export function selectPost({
  selectedPost
}) {
  return (dispatch) => {
    dispatch(requestCategories);
    Api.getCategories().then(categories => dispatch(receiveCategories(categories)));
  }
}

export function selectCategory({
  selectedCategory
}) {
  return (dispatch) => {
    dispatch(requestCategories);
    Api.getCategories().then(categories => dispatch(receiveCategories(categories)));
  }
}
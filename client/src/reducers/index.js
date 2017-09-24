import {
  REQUEST_POSTS,
  RECEIVE_POSTS,

  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,

  REQUEST_POST,
  RECEIVE_POST
} from '../actions';
import { combineReducers } from 'redux';

const initialPostState = {
  posts: [],
  isRequestingPosts: false,
  postsLastUpdatedAt: undefined,
  selectedPost: undefined,
}

const initialCategoryState = {
  categories: [],
  isRequestingCategories: false,
  categoriesLastUpdatedAt: undefined,
  selectedCategory: "",
}

const initialState = {
  posts: initialPostState,
  categories: initialCategoryState
}

function posts(state = initialPostState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isRequestingPosts: true };
    case RECEIVE_POSTS:
      return { ...state, isRequestingPosts: false, postsLastUpdatedAt: action.receivedAt, posts: action.posts };
    default:
      return state;
  }
}

function categories(state = initialCategoryState, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return { ...state, isRequestingCategories: true };
    case RECEIVE_CATEGORIES:
      return { ...state, isRequestingCategories: false, categoriesLastUpdatedAt: action.receivedAt, categories: action.categories };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
})
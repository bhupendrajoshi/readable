import posts from './posts';
import categories from './categories';
import comments from './comments';
import { combineReducers } from 'redux';

export default combineReducers({
  posts,
  categories,
  comments
})
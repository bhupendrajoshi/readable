import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POST } from '../actions/posts';

const initialPostState = {
  posts: [],
  isRequestingPosts: false,
  postsLastUpdatedAt: undefined,
  selectedPost: undefined,
}

export default function posts(state = initialPostState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isRequestingPosts: true };
    case RECEIVE_POSTS:
      return { ...state, isRequestingPosts: false, postsLastUpdatedAt: action.receivedAt, posts: action.posts };
    case RECEIVE_POST:
      return { ...state, selectedPost: action.post };
    default:
      return state;
  }
}
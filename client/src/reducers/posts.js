import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POST, RECEIVE_POST_COMMENTS } from '../actions/posts';

const initialPostState = {
  posts: [],
  isRequestingPosts: false,
  postsLastUpdatedAt: undefined,
  selectedPost: undefined,
  selectedPostComments: []
}

export default function posts(state = initialPostState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isRequestingPosts: true };
    case RECEIVE_POSTS:
      return { ...state, isRequestingPosts: false, postsLastUpdatedAt: action.receivedAt, posts: action.posts };
    case RECEIVE_POST:
      return { ...state, selectedPost: action.post };
    case RECEIVE_POST_COMMENTS:
      return { ...state, selectedPostComments: action.comments };
    default:
      return state;
  }
}
import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POST, DELETE_POST, RECEIVE_POST_COMMENTS, RECEIVE_POST_COMMENT, RECEIVE_NEW_POST_COMMENT } from '../actions/actionTypes';

const initialPostState = {
  posts: [],
  isRequestingPosts: false,
  postsLastUpdatedAt: undefined,
};

function updatePost(oldPost, newPost) {
  return {
    ...oldPost,
    timestamp: newPost.timestamp,
    title: newPost.title,
    body: newPost.body,
    author: newPost.author,
    category: newPost.category,
    voteScore: newPost.voteScore,
    deleted: newPost.deleted,
  };
}

export default function posts(state = initialPostState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isRequestingPosts: true };

    case RECEIVE_POSTS: {
      const updatedPosts = state.posts.map((p) => {
        const updatedPost = action.posts.find(ap => ap.id === p.id);
        return updatedPost ? updatePost(p, updatedPost) : p;
      });

      const newPosts = action.posts.filter(ap =>
        state.posts.find(p => p.id === ap.id) === undefined);

      return {
        ...state,
        isRequestingPosts: false,
        postsLastUpdatedAt: action.receivedAt,
        posts: [...updatedPosts, ...newPosts],
      };
    }

    case RECEIVE_POST: {
      if (action.post.id) {
        const receivedPost = state.posts.find(p => p.id === action.post.id);
        if (!receivedPost) {
          return { ...state, posts: [...state.posts, action.post] };
        }

        return {
          ...state,
          posts: state.posts.map(post =>
            ((post.id === action.post.id) ? updatePost(post, action.post) : post)),
        };
      }
      return state;
    }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          ((post.id === action.postId) ? { ...post, deleted: true } : post)),
      };

    case RECEIVE_POST_COMMENTS:
      return {
        ...state,
        posts: state.posts.map(post => ((post.id === action.postId) ? {
          ...post,
          comments: action.comments,
        } : post)),
      };

    case RECEIVE_POST_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => ((post.id === action.postId) ? {
          ...post,
          comments: post.comments.map(comment => (comment.id === action.comment.id ?
            action.comment : comment)),
        } : post)),
      };

    case RECEIVE_NEW_POST_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => ((post.id === action.postId) ? {
          ...post,
          comments: [...post.comments, action.comment],
        } : post)),
      };

    default:
      return state;
  }
}

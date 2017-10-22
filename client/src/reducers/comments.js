import { RECEIVE_POST_COMMENTS, RECEIVE_POST_COMMENT, RECEIVE_NEW_POST_COMMENT } from '../actions/actionTypes';

const initialCommentState = {
  comments: []
}

export default function comments(state = initialCommentState, action) {
  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return { ...state, comments: action.comments };
    case RECEIVE_POST_COMMENT:
      return {
        ...state, comments: state.comments.map(
          comment => comment.id === action.comment.id ? action.comment : comment)
      };
    case RECEIVE_NEW_POST_COMMENT:
      return { ...state, comments: [...state.comments, action.comment] };
    default:
      return state;
  }
}
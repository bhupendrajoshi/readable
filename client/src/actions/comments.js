import * as Api from '../utils/api';

import { RECEIVE_POST_COMMENTS, RECEIVE_POST_COMMENT, RECEIVE_NEW_POST_COMMENT } from './actionTypes';

function receivePostComments(postId, comments) {
  return {
    type: RECEIVE_POST_COMMENTS,
    postId,
    comments,
  };
}

function receivePostComment(postId, comment) {
  return {
    type: RECEIVE_POST_COMMENT,
    postId,
    comment,
  };
}

function receiveNewPostComment(postId, comment) {
  return {
    type: RECEIVE_NEW_POST_COMMENT,
    postId,
    comment,
  };
}

export function fetchPostComments(postId) {
  return (dispatch) => {
    Api.getPostComments(postId).then(comments => dispatch(receivePostComments(postId, comments)));
  };
}

export function voteUpComment(postId, commentId) {
  return (dispatch) => {
    Api.voteUpComment(commentId).then(comment => dispatch(receivePostComment(postId, comment)));
  };
}

export function voteDownComment(postId, commentId) {
  return (dispatch) => {
    Api.voteDownComment(commentId).then(comment => dispatch(receivePostComment(postId, comment)));
  };
}

export function addComment(postId, data) {
  return (dispatch) => {
    Api.addComment(data).then(comment => dispatch(receiveNewPostComment(postId, comment)));
  };
}

export function editComment(postId, data) {
  return (dispatch) => {
    Api.editComment(data).then(comment => dispatch(receivePostComment(postId, comment)));
  };
}

export function deleteComment(postId, commentId) {
  return (dispatch) => {
    Api.deleteComment(commentId).then(comment => dispatch(receivePostComment(postId, comment)));
  };
}

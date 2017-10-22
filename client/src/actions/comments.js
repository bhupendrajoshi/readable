import * as Api from '../utils/api'

import { RECEIVE_POST_COMMENTS, RECEIVE_POST_COMMENT, RECEIVE_NEW_POST_COMMENT } from './actionTypes';

function receivePostComments(comments) {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments
  }
}

function receivePostComment(comment) {
  return {
    type: RECEIVE_POST_COMMENT,
    comment
  }
}

function receiveNewPostComment(comment) {
  return {
    type: RECEIVE_NEW_POST_COMMENT,
    comment
  }
}

export function fetchPostComments(postId) {
  return (dispatch) => {
    Api.getPostComments(postId).then(comments => dispatch(receivePostComments(comments)));
  }
}

export function voteUpComment(commentId) {
  return (dispatch) => {
    Api.voteUpComment(commentId).then(comment => dispatch(receivePostComment(comment)));
  }
}

export function voteDownComment(commentId) {
  return (dispatch) => {
    Api.voteDownComment(commentId).then(comment => dispatch(receivePostComment(comment)));
  }
}

export function addComment(data) {
  return (dispatch) => {
    Api.addComment(data).then(comment => dispatch(receiveNewPostComment(comment)));
  }
}

export function editComment(data) {
  return (dispatch) => {
    Api.editComment(data).then(comment => dispatch(receivePostComment(comment)));
  }
}

export function deleteComment(commentId) {
  return (dispatch) => {
    Api.deleteComment(commentId).then(comment => dispatch(receivePostComment(comment)));
  }
}
import * as Api from '../utils/api';

import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_POST, DELETE_POST } from './actionTypes';

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
    receivedAt: Date.now(),
  };
}

function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post,
    receivedAt: Date.now(),
  };
}

function postDeleted(postId) {
  return {
    type: DELETE_POST,
    postId,
  };
}

export function fetchPosts(data) {
  return (dispatch) => {
    dispatch(requestPosts);
    if (data === undefined) {
      Api.getPosts().then(posts => dispatch(receivePosts(posts)));
    } else {
      Api.getPostsPerCategory(data.name).then(posts => dispatch(receivePosts(posts)));
    }
  };
}

export function selectPost(postId) {
  return (dispatch) => {
    Api.getPost(postId).then(post => dispatch(receivePost(post)));
  };
}

export function createPost(data) {
  return (dispatch) => {
    Api.addPost(data);
  };
}

export function editPost(data) {
  return (dispatch) => {
    Api.editPost(data);
  };
}

export function deletePost(postId) {
  return (dispatch) => {
    Api.deletePost(postId).then(post => dispatch(postDeleted(postId)));
  };
}

export function voteUpPost(postId) {
  return (dispatch) => {
    Api.voteUpPost(postId).then(post => dispatch(receivePost(post)));
  };
}

export function voteDownPost(postId) {
  return (dispatch) => {
    Api.voteDownPost(postId).then(post => dispatch(receivePost(post)));
  };
}


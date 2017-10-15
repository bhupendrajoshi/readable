import * as Api from '../utils/api'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';

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

function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post: post,
    receivedAt: Date.now()
  }
}

export function fetchPosts(data) {
  return (dispatch) => {
    dispatch(requestPosts);
    if (data === undefined) {
      Api.getPosts().then(posts => dispatch(receivePosts(posts)));
    }
    else {
      Api.getPostsPerCategory(data.name).then(posts => dispatch(receivePosts(posts)));
    }
  }
}

export function selectPost(postId) {
  return (dispatch) => {
    Api.getPost(postId).then(post => dispatch(receivePost(post)));
  }
}

export function createPost(data) {
  return (dispatch) => {
    Api.addPost(data);
  }
}

export function editPost(data) {
  return (dispatch) => {
    Api.editPost(data);
  }
}

export function deletePost(postId) {
  return (dispatch) => {
    Api.deletePost(postId);
  }
}

export function voteUpPost(postId) {
  return (dispatch) => {
    Api.voteUpPost(postId).then(post => dispatch(receivePost(post)));
  }
}

export function voteDownPost(postId) {
  return (dispatch) => {
    Api.voteDownPost(postId).then(post => dispatch(receivePost(post)));
  }
}


function receivePostComments(comments) {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments: comments
  }
}

export function fetchPostComments(postId) {
  return (dispatch) => {
    Api.getPostComments(postId).then(comments => dispatch(receivePostComments(comments)));
  }
}
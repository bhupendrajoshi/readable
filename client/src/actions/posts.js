import * as Api from '../utils/api'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

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

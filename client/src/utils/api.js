const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:5001';

let token = localStorage.token;

if (!token) { token = localStorage.token = Math.random().toString(36).substr(-8); }

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPostsPerCategory = categoryId =>
  fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const editPost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(data => data);

export const voteUpPost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' }),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const voteDownPost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' }),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const getPostComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const voteUpComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' }),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const voteDownComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' }),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const addComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const editComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => data);

const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostsPerCategory = (categoryId) =>
  fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: { ...headers, 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => data)

export const editPost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: { ...headers, 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => data)

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: "DELETE",
    headers
  })
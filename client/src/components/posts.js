import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectPost } from '../actions'

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts ? this.props.posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          )) : ''}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts.posts,
    categories: categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    selectPost: (data) => dispatch(selectPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

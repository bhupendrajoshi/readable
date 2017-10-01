import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts'

import PostMini from './postmini';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      voteScoreSortOrder: 'desc',
      timestampSortOrder: 'none',
    }
  }

  componentDidMount() {
    this.props.getPosts(this.props.selectedCategory);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      this.props.getPosts(nextProps.selectedCategory);
    }
  }

  render() {

    return (
      <div>
        {this.props.posts && this.props.posts.length > 0 ? this.props.posts.map(post => (
          <PostMini key={post.id} post={post} />
        )) : (<span>No posts</span>)}
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts.posts.filter(p => !p.deleted).sort(p => p.timestamp).reverse(),
    categories: categories.categories,
    selectedCategory: categories.selectedCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

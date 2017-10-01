import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPost } from '../actions/posts'

class PostDetail extends Component {
  componentDidMount() {
    this.props.selectPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        {post && !post.deleted ?
          (
            <span>{post.title}</span>
          )
          :
          (
            <span>Post no longer present</span>
          )
        }
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    post: posts.selectedPost,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPost: (data) => dispatch(selectPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

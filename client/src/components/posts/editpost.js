import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import PostForm from './postform';

import { editPost } from '../../actions/posts';

const EditPost = (props) => {
  const post = props.posts.find(p => p.id === props.params.id);

  return (
    <PostForm
      post={post}
      updatedForm={(data) => {
        props.editPost(data);
        browserHistory.goBack();
      }}
    />
  );
};

EditPost.propTypes = {
  posts: PropTypes.array.isRequired,
};

function mapStateToProps({ posts }) {
  return {
    posts: posts.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: data => dispatch(editPost(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);


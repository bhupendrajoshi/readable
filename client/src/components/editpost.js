import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import PostForm from './postform';

import { editPost } from '../actions/posts';

const EditPost = props => {
  return (
    <PostForm post={props.post} updatedForm={data => {
      props.editPost(data);
      browserHistory.goBack();
    }} />
  );
};

EditPost.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps({ posts }) {
  return {
    post: posts.selectedPost,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editPost: (data) => dispatch(editPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);


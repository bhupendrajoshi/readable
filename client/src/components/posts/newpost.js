import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import PostForm from './postform'

import { createPost } from '../../actions/posts';

const NewPost = props => {
  return (
    <PostForm post={undefined} updatedForm={data => {
      props.createPost(data);
      browserHistory.goBack();
    }} />
  );
};

function mapDispatchToProps(dispatch) {
  return {
    createPost: (data) => dispatch(createPost(data))
  }
}

export default connect(undefined, mapDispatchToProps)(NewPost);
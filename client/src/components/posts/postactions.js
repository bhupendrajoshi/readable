import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import { deletePost } from '../../actions/posts';

const PostActions = (props) => {
  const { post, shouldGoBack, deletePost } = props;

  return (
    <div>
      <Link to={`${post.category}/editpost/${post.id}`}>
        <Button fab color="primary" ><ModeEditIcon /></Button>
      </Link>
      <Button fab color="accent" onClick={() => { deletePost(post.id); if (shouldGoBack) browserHistory.goBack(); }} >
        <DeleteIcon />
      </Button>
    </div>
  );
};

PostActions.propTypes = {
  post: PropTypes.object.isRequired,
  shouldGoBack: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
  };
}

export default connect(undefined, mapDispatchToProps)(PostActions);

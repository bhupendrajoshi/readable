import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';

import { voteUpPost, voteDownPost } from '../../actions/posts';

const PostVoting = (props) => {
  const { post, voteUpPost, voteDownPost } = props;

  return (
    <Grid item container spacing={16} >
      <Grid item xs={1}>
        <Chip label={post.voteScore} />
      </Grid>
      <Grid item xs={1}>
        <IconButton color="accent" onClick={() => voteUpPost(post.id)}>
          <ThumbUp />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton color="accent" onClick={() => voteDownPost(post.id)}>
          <ThumbDown />
        </IconButton>
      </Grid>
    </Grid>
  );
};

PostVoting.propTypes = {
  post: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    voteUpPost: postId => dispatch(voteUpPost(postId)),
    voteDownPost: postId => dispatch(voteDownPost(postId)),
  };
}

export default connect(undefined, mapDispatchToProps)(PostVoting);

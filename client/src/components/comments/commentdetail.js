import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';

import { voteUpComment, voteDownComment, editComment, deleteComment } from '../../actions/comments';

import CommentForm from './commentform';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  multilineTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    height: '100px',
  },
  menu: {
    width: 200,
  },
});

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }
  render() {
    const { post, comment, voteUpComment, voteDownComment, editComment, deleteComment } = this.props;
    return (
      <div>

        {!this.state.editing
          ? (
            <Card className="card">
              <CardContent>
                <Grid container spacing={16} >
                  <Grid item xs={8}>
                    <Typography type="body2" color="inherit" noWrap>{comment.body}</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={16} >
                  <Grid item xs={1}>
                    <Chip label={comment.author} />
                  </Grid>
                </Grid>
                <Grid container spacing={16} >
                  <Grid item xs={1}>
                    <span>{comment.voteScore}</span>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="accent" onClick={() => voteUpComment(post.id, comment.id)}>
                      <ThumbUp />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="accent" onClick={() => voteDownComment(post.id, comment.id)}>
                      <ThumbDown />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button fab color="primary" onClick={() => this.setState({ editing: true })} ><ModeEditIcon /></Button>
                <Button fab color="accent" onClick={() => deleteComment(post.id, comment.id)} ><DeleteIcon /></Button>
              </CardActions>
            </Card>

          )
          : (
            <CommentForm
              comment={comment}
              updatedComment={(comment) => {
                editComment(post.id, comment);
                this.setState({ editing: false });
              }}
            />
          )}
      </div>
    );
  }
}


CommentDetail.propTypes = {
  comment: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    voteUpComment: (postId, commentId) => dispatch(voteUpComment(postId, commentId)),
    voteDownComment: (postId, commentId) => dispatch(voteDownComment(postId, commentId)),
    editComment: (postId, comment) => dispatch(editComment(postId, comment)),
    deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
  };
}

export default compose(withStyles(styles), connect(undefined, mapDispatchToProps))(CommentDetail);
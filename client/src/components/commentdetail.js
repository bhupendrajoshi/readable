import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
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

import { voteUpComment, voteDownComment, deleteComment } from '../actions/posts';

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
  }
});

class CommentDetail extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    }
  }
  render() {
    const { classes, comment, voteUpComment, voteDownComment, deleteComment } = this.props;
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
                    <IconButton color="accent" onClick={() => voteUpComment(comment.id)}>
                      <ThumbUp />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="accent" onClick={() => voteDownComment(comment.id)}>
                      <ThumbDown />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button fab color="primary" onClick={() => this.setState({ editing: true })} ><ModeEditIcon /></Button>
                <Button fab color="accent" onClick={() => deleteComment(comment.id)} ><DeleteIcon /></Button>
              </CardActions>
            </Card>

          )
          : (
            <TextField
              id="body"
              label="Body"
              required
              multiline
              rowsMax="5"
              value={comment.body}
              className={classes.multilineTextField}
            />
          )}
      </div>
    );
  }
}


CommentDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    voteUpComment: (commentId) => dispatch(voteUpComment(commentId)),
    voteDownComment: (commentId) => dispatch(voteDownComment(commentId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default compose(withStyles(styles), connect(undefined, mapDispatchToProps))(CommentDetail);

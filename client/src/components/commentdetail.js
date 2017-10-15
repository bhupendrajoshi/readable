import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

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
    const { classes, comment } = this.props;
    return (
      <div>

        {!this.state.editing
          ? (
            <Typography type="body2" color="inherit" noWrap>{comment.body}</Typography>
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

export default withStyles(styles)(CommentDetail);

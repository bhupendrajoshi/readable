import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import Moment from 'react-moment';

import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import { selectPost } from '../actions/posts';
import { deletePost } from '../actions/posts';

class PostDetail extends Component {
  componentDidMount() {
    this.props.selectPost(this.props.params.id);
  }

  render() {
    const { post, deletePost } = this.props;

    return (
      <div>
        {post && !post.deleted ?
          (
            <article>
              <Link to={`editpost`}>
                <Button fab color="primary" ><ModeEditIcon /></Button>
              </Link>
              <Button fab color="accent" onClick={() => { deletePost(post.id); browserHistory.push('/'); }} ><DeleteIcon /></Button>
              <Grid container spacing={16}>
                <Grid item xs={2} />
                <Grid item xs={8} container spacing={16} direction='column'>
                  <Grid item>
                    <header>
                      <h2>{post.title}</h2>
                    </header>
                  </Grid>
                  <Grid item>
                    <Moment format="DD MMM YYYY HH:MM:SS">
                      {post.timestamp}
                    </Moment>
                  </Grid>
                  <Grid item>
                    <Chip label={post.author} />
                  </Grid>
                  <Grid item>
                    <p>{post.body}</p>
                  </Grid>
                  <Grid item>
                    <Chip label={post.category} />
                  </Grid>
                  <Grid item container spacing={16} >
                    <Grid item xs={1}>
                      <span>{post.voteScore}</span>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton color="accent">
                        <ThumbUp />
                      </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton color="accent">
                        <ThumbDown />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </article>
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
    selectPost: (data) => dispatch(selectPost(data)),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

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

import { selectPost, deletePost, voteUpPost, voteDownPost } from '../../actions/posts';
import { fetchPostComments, addComment } from '../../actions/comments';

import Comments from '../comments/comments';

class PostDetail extends Component {
  componentDidMount() {
    this.props.selectPost(this.props.params.id);
    this.props.getPostComments(this.props.params.id);
  }

  render() {
    const { post, deletePost, voteUpPost, voteDownPost, comments, addComment } = this.props;

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
                  <Grid item>
                    <Comments comments={comments} addComment={comment => addComment({ ...comment, parentId: post.id })} />
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

function mapStateToProps({ posts, comments }) {
  return {
    post: posts.selectedPost,
    comments: comments.comments.filter(c => !c.deleted)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPost: (data) => dispatch(selectPost(data)),
    getPostComments: (postId) => dispatch(fetchPostComments(postId)),
    addComment: (comment) => dispatch(addComment(comment)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    voteUpPost: (postId) => dispatch(voteUpPost(postId)),
    voteDownPost: (postId) => dispatch(voteDownPost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

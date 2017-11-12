import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';

import Moment from 'react-moment';

import { selectPost } from '../../actions/posts';
import { fetchPostComments, addComment } from '../../actions/comments';

import PostActions from './postactions';
import PostVoting from './postvoting';
import Comments from '../comments/comments';

class PostDetail extends Component {
  componentDidMount() {
    this.props.selectPost(this.props.params.id);
    this.props.getPostComments(this.props.params.id);
  }

  render() {
    const { posts, addComment } = this.props;
    const post = posts.find(p => p.id === this.props.params.id);

    return (
      <div>
        {post && !post.deleted ?
          (
            <article>
              <PostActions post={post} shouldGoBack />
              <Grid container spacing={16}>
                <Grid item xs={2} />
                <Grid item xs={8} container spacing={16} direction="column">
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
                  <PostVoting post={post} />
                  <Grid item>
                    <Comments
                      post={post}
                      addComment={comment => addComment(post.id, { ...comment, parentId: post.id })}
                    />
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

function mapStateToProps({ posts }) {
  return {
    posts: posts.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPost: data => dispatch(selectPost(data)),
    getPostComments: postId => dispatch(fetchPostComments(postId)),
    addComment: (postId, comment) => dispatch(addComment(postId, comment)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

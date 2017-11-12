import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';

import { Link } from 'react-router';

import Moment from 'react-moment';

import { fetchPostComments } from '../../actions/comments';

import PostActions from './postactions';
import PostVoting from './postvoting';

class PostMini extends Component {
  componentDidMount() {
    this.props.getPostComments(this.props.post.id);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Card className="card" key={post.id}>
          <Link to={`${post.category}/post/${post.id}`}>
            <CardHeader
              title={post.title}
              subheader={(<Moment format="DD MMM YYYY HH:MM:SS">
                {post.timestamp}
              </Moment>
              )}
            />
          </Link>
          <CardContent>
            <Grid container spacing={16} >
              <Grid item xs={1}>
                <Chip label={post.author} />
              </Grid>
            </Grid>
            {post.comments && post.comments.length > 0 ?
              (
                <Grid container spacing={16} >
                  <Grid item xs={1}>
                    <Chip label={post.comments && post.comments.filter(c => !c.deleted).length} />
                  </Grid>
                  <Grid item xs={2}>
                    <span>Comments</span>
                  </Grid>
                </Grid>
              ) :
              (
                <Grid container spacing={16} >
                  <Grid item xs={4}>
                    <span>No comments</span>
                  </Grid>
                </Grid>
              )}
            <PostVoting post={post} />
          </CardContent>
          <CardActions>
            <PostActions post={post} shouldGoBack={false} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostComments: postId => dispatch(fetchPostComments(postId)),
  };
}

export default connect(undefined, mapDispatchToProps)(PostMini);

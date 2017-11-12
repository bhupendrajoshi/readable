import React from 'react';

import Divider from 'material-ui/Divider';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import CommentDetail from './commentdetail';
import CommentForm from './commentform';

export default function Comments({ post, addComment }) {
  return (
    <Grid container spacing={16} direction="column">
      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <Typography type="title" color="inherit" noWrap>Comments</Typography>
      </Grid >

      <Grid item >
        <Typography type="body2" color="inherit" noWrap>New Comment</Typography>
        <CommentForm comment={undefined} updatedComment={comment => addComment(comment)} />
      </Grid >

      <Grid item>
        <Divider />
      </Grid >

      <Grid item>
        <Typography type="title" color="inherit" noWrap>
          {post && post.comments && post.comments.length > 0 ?
            (<span>{post.comments.length} Comments</span>)
            :
            (<span>No Comments</span>)}
        </Typography>

        {
          post && post.comments && post.comments.length > 0 &&
          (
            post.comments.filter(c => !c.deleted).map(c => (
              <CommentDetail key={c.id} post={post} comment={c} />
            ))
          )
        }
      </Grid >
    </Grid >
  );
}

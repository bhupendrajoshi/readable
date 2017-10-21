import React from 'react';

import Divider from 'material-ui/Divider';

import CommentDetail from './commentdetail';
import Typography from 'material-ui/Typography';

import CommentForm from './commentform';

export default function Comments({ comments, addComment }) {
  return (
    <div>
      <Divider />

      <Typography type="title" color="inherit" noWrap>Comments</Typography>

      <div>
        <Typography type="body2" color="inherit" noWrap>New Comment</Typography>
        <CommentForm comment={undefined} updatedComment={comment => addComment(comment)} />
      </div>

      {comments && comments.length > 0
        ? comments.map(c => (
          <CommentDetail key={c.id} comment={c} />
        ))
        : ((<span>No Comments</span>))}
    </div>
  );
}

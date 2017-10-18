import React from 'react';

import Divider from 'material-ui/Divider';

import CommentDetail from './commentdetail';
import Typography from 'material-ui/Typography';

export default function Comments({ comments }) {
  return (
    <div>
      <Divider />
      <Typography type="title" color="inherit" noWrap>Comments</Typography>
      {comments && comments.length > 0
        ? comments.map(c => (
          <CommentDetail key={c.id} comment={c} />
        ))
        : ((<span>No Comments</span>))}
    </div>
  );
}

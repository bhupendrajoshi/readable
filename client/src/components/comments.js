import React from 'react';

import Divider from 'material-ui/Divider';

import CommentDetail from './commentdetail';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

export default function Comments({ comments }) {
  return (
    <div>
      <Divider />
      <Typography type="title" color="inherit" noWrap>Comments</Typography>
      <List>
        {comments && comments.length > 0
          ? comments.map(c => (
            <ListItem key={c.id}>
              <CommentDetail comment={c} />
            </ListItem>
          ))
          : ((<span>No Comments</span>))}
      </List>
    </div>
  );
}

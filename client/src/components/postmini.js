import React from 'react';

import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import { Link } from 'react-router';

export default function PostMini({ post }) {

  const postDate = new Date(post.timestamp);
  const postDateAndTime = `${postDate.toDateString()} ${postDate.toTimeString()}`;

  return (
    <div>
      <Card className="card" key={post.id}>
        <CardHeader
          title={post.title}
          subheader={postDateAndTime}
        />
        <CardContent>
        </CardContent>
        <CardActions>
          <Chip label={post.author} />
          <Badge badgeContent={post.voteScore} color="accent">
            {post.voteScore > 0 ? <ThumbUp /> : <ThumbDown />}
          </Badge>
          <Link to={`post/${post.id}`}>
            More...
          </Link>
        </CardActions>
      </Card>

    </div>
  );
}

import React from 'react';

import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

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
          <Grid container spacing={16} >
            <Grid item xs={1}>
              <Chip label={post.author} />
            </Grid>
            <Grid item xs={1}>
              <Badge badgeContent={post.voteScore} color="accent">
                {post.voteScore > 0 ? <ThumbUp /> : <ThumbDown />}
              </Badge>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Link to={`post/${post.id}`}>
            <Button color="accent">
              Read More
            </Button>
          </Link>
        </CardActions>
      </Card>

    </div>
  );
}

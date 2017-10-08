import React from 'react';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import { Link } from 'react-router';

import Posts from './posts';
import Categories from './categories';

export default function Home() {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={2}>
          <Link to={`newpost`}>
            <Button fab color="primary" ><AddIcon /></Button>
          </Link>

          <Categories />
        </Grid>
        <Grid item xs={10}>
          <Posts />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}
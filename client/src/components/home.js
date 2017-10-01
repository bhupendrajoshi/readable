import React from 'react';

import Grid from 'material-ui/Grid';

import Posts from './posts';
import Categories from './categories';

export default function Home() {
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={10}>
          <Posts />
        </Grid>
        <Grid item xs>
          <Categories />
        </Grid>
      </Grid>
    </div>
  );
}
import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import { Route, Router, browserHistory } from 'react-router';

import PropTypes from 'prop-types';

import Home from './components/home'
import PostDetail from './components/postdetail';

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: '100%',
    order: 1,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" noWrap>
              Readable
            </Typography>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <Router history={browserHistory}>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={PostDetail} />
          </Router>
        </main>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
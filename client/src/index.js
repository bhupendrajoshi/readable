import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { MuiThemeProvider } from 'material-ui/styles';

import store from './store';
import theme from './theme';

import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import './index.css';
import App from './App';
import Home from './components/home'
import PostDetail from './components/postdetail';
import NewPost from './components/newpost';
import EditPost from './components/editpost';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/posts" component={Home} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/editpost" component={EditPost} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

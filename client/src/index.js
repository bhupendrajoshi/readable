import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';

import store from './store';
import theme from './theme';

import './index.css';
import App from './App';
import Home from './components/home';
import PostDetail from './components/posts/postdetail';
import NewPost from './components/posts/newpost';
import EditPost from './components/posts/editpost';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<App>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/newpost" component={NewPost} />
						<Route exact path="/:categoryname" component={Home} />
						<Route
							exact
							path="/:categoryname/post/:id"
							component={PostDetail}
						/>
						<Route
							exact
							path="/:categoryname/editpost/:id"
							component={EditPost}
						/>
					</Switch>
				</App>
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

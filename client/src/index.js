import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { MuiThemeProvider } from 'material-ui/styles';

import store from './store';
import theme from './theme';

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

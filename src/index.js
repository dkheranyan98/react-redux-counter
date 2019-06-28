import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Route, Switch, Router } from 'react-router';
// import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}> 
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


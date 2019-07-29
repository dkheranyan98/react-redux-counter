import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Id from './components/Id';
import Users from './components/Users';
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
          <Route path="/posts/:id" component={Id} />
          <Route path="/users/:id" component={Users} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


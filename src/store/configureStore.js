import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import counter from './counter/reducer';

export const history = createBrowserHistory()

const reducers = {
    counter,
    router: connectRouter(history),
}
const rootReducer = combineReducers(reducers)

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [routerMiddleware(history), thunk]
const configureStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;
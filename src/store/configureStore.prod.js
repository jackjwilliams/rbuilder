import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import dashboard from '../reducers/dashboard';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
          combineReducers({dashboard, router: routerReducer}), 
          composeEnhancers(
            applyMiddleware(middleware, thunk)
          )
  );
}
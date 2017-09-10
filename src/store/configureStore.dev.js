import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import socketMiddleware from '../socketMiddleware';
import { entities, ui, admin } from '../reducers';
import DevTools from '../containers/DevTools';

const composeEnhancers = compose;

export const history = createHistory();

const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
          combineReducers({entities, ui, admin, router: routerReducer}), 
          initialState,
          composeEnhancers(
            applyMiddleware(middleware, thunk, socketMiddleware),
            DevTools.instrument()
          )
  );
}

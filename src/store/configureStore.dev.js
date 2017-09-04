import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import dashboard from '../reducers/dashboard';
import DevTools from '../containers/DevTools';

const composeEnhancers = compose;

export const history = createHistory();

const middleware = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
          combineReducers({dashboard, router: routerReducer}), 
          initialState,
          composeEnhancers(
            applyMiddleware(middleware, thunk),
            DevTools.instrument()
          )
  );
}

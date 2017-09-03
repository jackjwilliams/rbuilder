import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import dashboard from './reducers/dashboard';

export default compose(
  applyMiddleware(thunk)
)(createStore)(combineReducers({dashboard}));
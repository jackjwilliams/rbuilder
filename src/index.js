import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

import './index.css';
import '../node_modules/grommet-css'

import { configureStore, history } from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);

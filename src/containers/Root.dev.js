import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { default as GrommetApp } from 'grommet/components/App'
import { Headline } from 'grommet';

// import App from '../App';
import Header from '../components/Header';
import Dashboard from './Dashboard';
import Admin from './Admin';
import Builder from './Builder';
import DevTools from './DevTools';

export default function Root({store, history}) {
  return (
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <GrommetApp centered={false}>
            <Header/>
            {/* <Headline>Welcome to React with Grommet</Headline> */}
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/builder' component={Builder}/>
          </GrommetApp>
          
        </ConnectedRouter>
        <DevTools/>
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
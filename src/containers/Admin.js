import React from 'react';
import { Route } from 'react-router-dom';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

import AdminNpcs from './AdminNpcs';
import AdminLogs from './AdminLogs';
import AdminSidebar from '../components/AdminSidebar';

export default class Admin extends React.Component {
  render() {
    return (
      <Split flex='right'>
        <AdminSidebar />
        <Box pad='medium'>
          {/* <Route exact path='/admin'>
            <Redirect to={{pathname: '/admin/npcs', state: {from: this.props.location}}}/>
          </Route> */}
          <Route path='/admin/npcs' component={AdminNpcs} />
          <Route path='/admin/logs' component={AdminLogs} />
        </Box>
      </Split>
    )
  }
}
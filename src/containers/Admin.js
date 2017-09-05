import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  Title,
  Header,
  Sidebar,
  Box,
  Menu,
  Anchor,
  Footer,
  Button,
  Split,
  Columns,
  Search
} from 'grommet';

import AdminNpcs from './AdminNpcs';

export default class Admin extends React.Component {
  render() {
    return (
      <Split flex='right'>
        <Sidebar colorIndex='neutral-1'>
          <Header pad='medium' justify='between'>
            <Title>Admin</Title>
          </Header>
          <Box flex='grow' justify='start'>
            <Menu primary={true}>
              <Anchor path='/admin/npcs'>
                NPCS
              </Anchor>
              <Anchor href='#'>
                Players
              </Anchor>
              <Anchor href='#'>
                Items
              </Anchor>
              <Anchor href='#'>
                Rooms
              </Anchor>
              <Anchor href='#'>
                Config
              </Anchor>
            </Menu>
          </Box>
          <Footer pad='medium'>
            <Button/>
          </Footer>
        </Sidebar>
        <Box pad='medium'>
          {/* <Route exact path='/admin'>
            <Redirect to={{pathname: '/admin/npcs', state: {from: this.props.location}}}/>
          </Route> */}
          <Route path='/admin/npcs' component={AdminNpcs} />
        </Box>
      </Split>
    )
  }
}
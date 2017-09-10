import React from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';

const AdminSidebar = () => (
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
        <Anchor path='/admin/logs'>
          Logs
        </Anchor>
      </Menu>
    </Box>
    <Footer pad='medium'>
      <div>Test</div>
    </Footer>
  </Sidebar>
);

export default AdminSidebar;
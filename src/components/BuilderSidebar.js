import React from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';

const BuilderSidebar = () => (
    <Sidebar colorIndex='neutral-1'>
      <Header pad='medium' justify='between'>
        <Title>Builder</Title>
      </Header>
      <Box flex='grow'
        justify='start'>
        <Menu primary={true}>
          <Anchor href='#'
            className='active'>
            Bundles
          </Anchor>
          <Anchor href='#'>
            Areas
          </Anchor>
          <Anchor href='#'>
            NPCs
          </Anchor>
          <Anchor href='#'>
            Rooms
          </Anchor>
          <Anchor href='#'>
            Items
          </Anchor>
        </Menu>
      </Box>
      <Footer pad='medium'>
        <div>Test</div>
      </Footer>
    </Sidebar>
  );

  export default BuilderSidebar;
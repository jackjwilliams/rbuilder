import React from 'react';
import { Title, Header,  Sidebar, Box, Menu, Anchor, Footer, Button } from 'grommet';

export default class Admin extends React.Component {
  render() {
    return (
      <Sidebar colorIndex='neutral-1'>
        <Header pad='medium' justify='between'>
          <Title>Admin</Title>
        </Header>
        <Box flex='grow'
          justify='start'>
          <Menu primary={true}>
            <Anchor href='#'
              className='active'>
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
          <Button />
        </Footer>
      </Sidebar>
    )
  }
}
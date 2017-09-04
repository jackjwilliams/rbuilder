import React from 'react';
import { Title, Header,  Sidebar, Box, Menu, Anchor, Footer, Button } from 'grommet';

export default class Builder extends React.Component {
  render() {
    return (
      <Sidebar colorIndex='neutral-1'>
        <Header pad='medium' justify='between'>
          <Title>Builder</Title>
        </Header>
        <Box flex='grow'
          justify='start'>
          <Menu primary={true}>
            <Anchor href='#'
              className='active'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
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
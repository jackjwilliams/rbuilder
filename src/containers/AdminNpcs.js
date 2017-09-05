import React from 'react';
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

export default AdminNpcs => {
  return (
    <Box>
      <Header>
        <Title>NPCs</Title>
        <Box flex={true} justify='end' direction='row' responsive={true}>
          <Search inline={true} fill={true} size='medium' placeHolder='Search'/>
        </Box>
      </Header>
      <Columns justify='start'>
        <Header>Content</Header>
      </Columns>
    </Box>
  )
}

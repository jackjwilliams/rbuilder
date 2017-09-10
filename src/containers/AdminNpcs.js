import React from 'react';

import Search from 'grommet/components/Search';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';

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

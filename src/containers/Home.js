import React from 'react';
import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns';
import Headline from 'grommet/components/Headline';

export default Home => (
  <Columns justify='center' size='large'>
    <Box align='center' pad={{vertical: 'large'}}>
      <Headline align='center' strong={true}>rBuilder 1.0</Headline>
    </Box>
  </Columns>
);
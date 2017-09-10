import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';

const DashboardStat = ({ name, value }) => {
  return (
      <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
        <Value value={value} label={name} size='large'/>
      </Box>
  );
}

DashboardStat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}

export default DashboardStat;


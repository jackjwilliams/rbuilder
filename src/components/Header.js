import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header as GrommetHeader, Title, Box, Menu, Anchor } from 'grommet';

export default class Header extends React.Component {
  render() {
    return (
      <Box colorIndex='neutral-1'>
        <GrommetHeader justify='center'>
          <Title><NavLink to='/'>rBuilder</NavLink></Title>
          <Box size={{width: {max: 'xxlarge'}}} direction='row' 
              responsive={false} justify='start' align='center'
              pad={{horizontal: 'medium'}} flex='grow' colorIndex='neutral-1'>
              <Menu label='Label' inline={true} direction='row' flex='grow'>
                <Anchor path='/dashboard'>Dashboard
                  {/* <NavLink to='/dashboard' className='grommetux-anchor' activeClassName='grommetux-anchor--active'>Dashboard</NavLink> */}
                </Anchor>
                <Anchor path='/admin'>Admin
                  {/* <NavLink to='/admin' className='grommetux-anchor' activeClassName='grommetux-anchor--active'>Admin</NavLink> */}
                </Anchor>
                <Anchor path='/builder'>Builder
                  {/* <NavLink to='/builder' className='grommetux-anchor' activeClassName='grommetux-anchor--active'>Builder</NavLink> */}
                </Anchor>
              </Menu>
          </Box>
        </GrommetHeader>
      </Box>
      
    );
  }
}
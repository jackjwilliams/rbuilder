import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Header as GrommetHeader, Title, Box, Menu, Anchor } from 'grommet';
import Spinning from 'grommet/components/icons/Spinning';

const mapStateToProps = (state) => ({
  fetching: state.ui.fetching
})

class Header extends React.Component {
  render() {
    const spinner = this.props.fetching ? <Spinning size='large'/> : '';
    return (
      <Box colorIndex='grey-1'>
        <GrommetHeader justify='center'>
          
          <Title><NavLink to='/'>rBuilder</NavLink></Title>
          
          <Box size={{width: {max: 'xxlarge'}}} direction='row' responsive={false} justify='start' align='center'
              pad={{horizontal: 'medium'}} flex='grow'>
            <Menu label='Label' inline={true} direction='row' flex='grow'>
              <Anchor path='/dashboard'>Dashboard
                {/* <NavLink to='/dashboard' className='grommetux-anchor' activeClassName='grommetux-anchor--active'>Dashboard</NavLink> */}
              </Anchor>
              <Anchor path='/admin/npcs'>Admin
                {/* <NavLink to='/admin' className='grommetux-anchor' activeClassName='grommetux-anchor--active'>Admin</NavLink> */}
              </Anchor>
              <Anchor path='/builder'>Builder
                {/* <NavLink to='/builder' className='grommetux-anchor' activeClassName='grommetux-anchor--active'>Builder</NavLink> */}
              </Anchor>
            </Menu>
            <Box align='start' >
              {spinner}
            </Box>
          </Box>
        </GrommetHeader>
      </Box>
      
    );
  }
}

export default connect(mapStateToProps)(Header);

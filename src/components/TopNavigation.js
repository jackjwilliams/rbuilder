import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Spinning from 'grommet/components/icons/Spinning';

const mapStateToProps = (state) => ({fetching: state.ui.fetching})

class TopNavigation extends React.Component {
  render() {
    const spinner = this.props.fetching
      ? <Spinning size='large'/>
      : '';
    return (
      <Box colorIndex='grey-1'>
        <Header justify='center'>
          <Title>
            <NavLink to='/'>rBuilder</NavLink>
          </Title>
          <Box
            size={{
            width: {
              max: 'xxlarge'
            }
          }}
            direction='row'
            responsive={false}
            justify='start'
            align='center'
            pad={{
            horizontal: 'medium'
          }}
            flex='grow'>
            <Menu label='Label' inline={true} direction='row' flex='grow'>
              <Anchor path='/dashboard'>Dashboard
              </Anchor>
              <Anchor path='/admin/npcs'>Admin
              </Anchor>
              <Anchor path='/builder'>Builder
              </Anchor>
            </Menu>
            <Box align='start'>
              {spinner}
            </Box>
          </Box>
        </Header>
      </Box>

    );
  }
}

export default connect(mapStateToProps)(TopNavigation);

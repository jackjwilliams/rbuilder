import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { loadNpcs } from './actions/dashboard';

import { default as GrommetApp } from 'grommet/components/App'
// import Headline from 'grommet/components/Headline'
// import Image from 'grommet/components/Image'
import { Headline, Image, List, ListItem } from 'grommet';

class App extends Component {

  componentDidMount() {
    this.props.onLoadNpcs();
  }

  render() {
    let npcs = this.props.npcs.list.map(npc => {
      return <ListItem key={npc.name}>{npc.name}</ListItem>
    })
    let error = this.props.npcs.error;
    return (
      <GrommetApp>
        <Image src={logo} />
        <Headline>Welcome to React with Grommet</Headline>
        {npcs && 
          <List>{npcs}</List>
        }
        {error && <div>Error loading NPCS ... </div>}
      </GrommetApp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    npcs: state.dashboard.npcs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadNpcs: () => dispatch(loadNpcs())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { Box, Value, Columns } from 'grommet';

import * as actions from '../actions';

const mapStateToProps = (state) => ({
  stats: {
    Items: state.dashboard.items.count,
    NPCs: state.dashboard.npcs.count,
    Players: state.dashboard.players.count,
    Rooms: state.dashboard.rooms.count,
    Areas: state.dashboard.areas.count,
    Quests: state.dashboard.quests.count
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: () => {
    dispatch(actions.loadQuests());
    dispatch(actions.loadNpcs());
    dispatch(actions.loadPlayers());
    dispatch(actions.loadRooms());
    dispatch(actions.loadAreas());
  }
});

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  renderStats() {
    let stats = [];
    for(var item in this.props.stats) {
      let stat = (
        <Box align='center' pad='medium' margin='small' colorIndex='light-2' key={item}>
          <Value value={this.props.stats[item]} label={item} size='large'/>
        </Box>
      )
      stats.push(stat);
    }
    return stats;
  }

  render() {
    return (
      <Columns size='medium' justify='center'>
        {this.renderStats()}
      </Columns>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
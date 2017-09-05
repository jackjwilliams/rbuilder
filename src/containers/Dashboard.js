import React from 'react';
import { connect } from 'react-redux';
import { Box, Value, Columns, Anchor } from 'grommet';
import RefreshIcon from 'grommet/components/icons/base/Refresh';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  stats: {
    Items: state.entities.items.count,
    NPCs: state.entities.npcs.count,
    Players: state.entities.players.count,
    Rooms: state.entities.rooms.count,
    Areas: state.entities.areas.count,
    Quests: state.entities.quests.count
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: (forced) => {
    dispatch(actions.loadQuests(forced));
    dispatch(actions.loadItems(forced));
    dispatch(actions.loadNpcs(forced));
    dispatch(actions.loadPlayers(forced));
    dispatch(actions.loadRooms(forced));
    dispatch(actions.loadAreas(forced));
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
      <div>
        <Columns size='medium' justify='center'>
          {this.renderStats()}
          
        </Columns>
        <Columns size='medium' justify='center'>
          <Box align='center' pad='medium' margin='small' colorIndex='light-2'>
            <Anchor onClick={() => this.props.onLoad(true)}>
              <RefreshIcon size='xlarge'/>
            </Anchor>
          </Box>
        </Columns>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
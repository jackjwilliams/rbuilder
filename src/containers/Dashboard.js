import React from 'react';
import { connect } from 'react-redux';
import RefreshIcon from 'grommet/components/icons/base/Refresh';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Anchor from 'grommet/components/Anchor';
import DashboardStat from '../components/DashboardStat';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  stats: {
    Items: state.entities.items.count,
    NPCs: state.entities.npcs.count,
    Players: state.entities.players.countLive + " / " + state.entities.players.countAll,
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
    dispatch(actions.loadLivePlayers(forced));
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
        <DashboardStat value={this.props.stats[item]} name={item} key={item}/>
      )
      stats.push(stat);
    }
    return stats;
  }

  render() {
    const stats = this.renderStats();
    return (
      <div>
        <Columns size='medium' justify='center'>
          {stats}
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
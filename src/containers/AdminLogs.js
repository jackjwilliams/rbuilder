import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Search from 'grommet/components/Search';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Timestamp from 'grommet/components/Timestamp';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import * as wsActions from '../actions/websocket';

const mapStateToProps = (state) => ({
  logs: state.admin.logs,
  count: 1
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: () => {
    dispatch(wsActions.wsConnect('ws://localhost:9001/logs'));
  }
});

class AdminLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    this.props.onLoad();
    this.scrollToBottom();
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.logsEnd);
    node.scrollIntoView({behavior: 'smooth'});
  }

  _formatMessage(message) {
    return message.replace(/\t/g, '\u00a0\u00a0\u00a0\u00a0');
  }

  _formatLevel(level) {
    return level === 'info' ? <span>info&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> : level;
  }

  render() {
    const logs = this.props.logs.list.map(log => {
      return (
      <ListItem align='start' justify='start' separator='horizontal' key={this.state.count++}>
        <span className='secondary'>
          {this._formatLevel(log.level)}<span>&nbsp;-&nbsp;</span>
        </span>
        <span>
          <Timestamp value={log.createdAt} fields={['date', 'time', 'seconds']}/><span>&nbsp;-&nbsp;</span>
        </span>
        <span>
          {this._formatMessage(log.message)}
        </span>
      </ListItem>);
    })
    return (
      <Box>
        <Header>
          <Title>Logs</Title>
          <Box flex={true} justify='end' direction='row' responsive={true}>
            <Search inline={true} fill={true} size='medium' placeHolder='Search'/>
          </Box>
        </Header>
        <Box justify='start'>
          <List>
            {logs}
          </List>
          <div style={{float: 'left', clear: 'both'}} ref={(el) => {this.logsEnd = el;}}></div>
        </Box>
      </Box>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogs);
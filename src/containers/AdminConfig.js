import React from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Toast from 'grommet/components/Toast';

import ReactJson from 'react-json-view';

import * as actions from '../actions'

const mapStateToProps = (state) => ({
  config: state.admin.config
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: () => dispatch(actions.loadConfig()),
  onSave: (config) => dispatch(actions.saveConfig(config))
})

class AdminConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveToast: false
    }
  }

  componentDidMount() {
    this.props.onLoad();
  }

  onEdit(config) {
    debugger;
    this.setState({ saveToast: true });
    this.props.onSave(config);
  }

  render() {
    return (
      <Box>
        <Header>
          {this.state.saveToast ? <Toast status='ok' size='small' onClose={() => {}}>Configuration saved successfully</Toast> : '' }
          <Title>Ranvier Configuration</Title>
        </Header>
        <Box>
          <ReactJson src={this.props.config} displayObjectSize={false} displayDataTypes={false} onEdit={(v) => this.onEdit(v.updated_src)} onAdd={() => {}} onDelete={() => {}}/>
          {/* <textarea value={JSON.stringify(this.state.json, undefined, 4)}></textarea> */}
        </Box>
      </Box>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminConfig);

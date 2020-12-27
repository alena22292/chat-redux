import React, { Component } from 'react';
import { setChannels, selectedChannel } from '../actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  componentWillMount() {
    this.props.setChannels();
  }
  handleClick(e) {
    this.props.selectedChannel();
  }

  render() {
    const channelList = this.props.channels(channel => {
      <div onCLick={this.handleClick}>
        {channel}
      </div>
    });
    return (
    <div>
      { channelList }
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  {
    setChannels: setChannels,
    selectedChannel: selectedChannel
  },
  dispatc);
}

function mapReduxStateToPtops(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapReduxStateToPtops, mapDispatchToProp)(ChannelList);

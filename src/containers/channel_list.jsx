import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }
  renderChannel = (channel) => {
    return (
      <li
        onClick={() => this.handleClick(channel)}
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        role="presentation"
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch
  );
}

function mapReduxStateToPtops(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapReduxStateToPtops, mapDispatchToProps)(ChannelList);

import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = (props) => {
  return (

    <div className="back-style">
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="../../assets/images/logo.svg" alt="logo" />
      </div>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
    </div>
  );
};

export default App;

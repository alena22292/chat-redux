import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentDidMount() {
    // TODO: dispatch an action to load flats!
    this.props.fetchMessages();
  }
  render() {
    const messages = this.props.dataMessage.map(message => <Message key={message.content} messageContent={message} />);
    return (
      <div>
        { messages }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    messages: reduxState.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

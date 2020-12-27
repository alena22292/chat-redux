import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class MessageForm extends Component {
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your message is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchMessages: fetchMessages },
//     dispatch
//   );
// }

// function mapStateToProps(reduxState) {
//   return {
//     messages: reduxState.messages
//   };
// }

export default MessageForm;

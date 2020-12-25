// TODO: add and export your own actions
export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`);
  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  return {
    type: 'CREATE_MESSAGE',
    payload: [channel, author, content]
  };
}

export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: []
  };
}

export function selectedChannel(channel) {
  return {
    type: 'SELECTED_CHANNEL',
    payload: channel
  };
}

export function setUser(currentUser) {
  return {
    type: 'SET_USER',
    payload: currentUser
  };
}

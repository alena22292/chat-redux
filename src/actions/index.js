// TODO: add and export your own actions
export function setMessages() {
  return {
    type: 'SET_MESSAGES',
    payload: []
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

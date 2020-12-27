import { SET_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    case CREATE_MESSAGE: {
      const updateState = state.slice(0);
      updateState.push(action.payload);
      return updateState;
    }
    case SELECT_CHANNEL: {
      return [];
    }
    default:
      return state;
  }
}

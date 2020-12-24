import { setChannels } from '../actions';

const channelsReducer = (state = ['general', 'react', 'code', 'job'], action) => {
  switch (action.type) {
    case 'SET_CHANNELS':
      return action.payload;
    default:
      return state;
  }
};

export default channelsReducer;

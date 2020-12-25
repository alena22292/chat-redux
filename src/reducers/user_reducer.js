import { SET_USER } from '../actions';

const userReducer = (state = (prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`), action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;

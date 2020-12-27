/* eslint no-alert:off */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import createMessageReducer from './reducers/create_message_reducer';

// State and reducers
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const indentityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: messagesReducer,
  channels: indentityReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: indentityReducer,
  newMessage: createMessageReducer
});


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

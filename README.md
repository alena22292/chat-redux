
The Chat-Redux is a multi-channel messaging application.

Redux state tree consists from message list, channels/selected chanel, current user. Current user and list of channels are static reducer, identified from the start.
For an action track there is used redux-middlewares (logger and promise).
The page contains the channel list and scrolling message list, used the scrollHeight property of the message list DOM element, and set it to the scrollTop property.

React + Redux starter with the following config:

- React, ReactDOM
- Redux, React-Redux
- Webpack 3
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

To bind this with arrow function callbacks in classes: (yarn add) babel-plugin-transform-class-properties --dev;



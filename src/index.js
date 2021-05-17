import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './redux/reducer';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister()

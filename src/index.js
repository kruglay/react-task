import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from "react-redux"
import App from './containers/App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// store.dispatch({
//   type: "TRY",
//   payload: "just try"
// })


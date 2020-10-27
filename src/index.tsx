import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import './index.css';
import './asset/public.css';
import App from './App';
import store from './store'
ReactDOM.render(
  // <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

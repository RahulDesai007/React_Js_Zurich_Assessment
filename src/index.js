import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from "react-redux"
import url from '../package.json'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={url.baseRoute}>
        <App />
      </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



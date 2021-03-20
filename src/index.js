import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from "./store/store";
import AppContainer from "./components/App/AppContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/scss-variables/custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
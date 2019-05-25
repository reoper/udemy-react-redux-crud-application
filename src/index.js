import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Providor} from 'react-redux';

import reducer from './reducers';

import App from './components/App';

import './index.css';


const store = createStore(reducer);

ReactDOM.render(
  <Providor store={store}>
    <App />
  </Providor>
  ,
  document.getElementById('root')
);

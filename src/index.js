import OCL from 'openchemlib';
import React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.css';
import App from './App';
import { initOCL } from './components/OCLnmr';

initOCL(OCL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

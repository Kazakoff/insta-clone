import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const { whyDidYouUpdate } = require('why-did-you-update');
/* eslint-disable-next-line import/newline-after-import */
whyDidYouUpdate(React);

ReactDOM.render(<App />, document.getElementById('root'));

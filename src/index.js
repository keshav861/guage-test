import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

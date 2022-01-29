import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Zkhool } from './Zkhool';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Zkhool />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
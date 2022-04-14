import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import 'reset-css';
import 'normalize.css';
import App from './App';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StaesManage } from './Components/StaesManage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StaesManage>

    <App />
    </StaesManage>
  </React.StrictMode>
);


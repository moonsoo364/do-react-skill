import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './assets/css/index.css';
import App from '@/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

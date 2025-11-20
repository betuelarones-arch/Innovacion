import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import main project styles (converted from the original HTML/CSS)
import './css/index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

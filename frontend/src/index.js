import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root once
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Performance monitoring
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log); // Or send to analytics service
}
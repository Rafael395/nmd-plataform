import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ← Único Router na aplicação */}
      <App /> {/* ← App agora não contém outro Router */}
    </BrowserRouter>
  </React.StrictMode>
);

// Opcional: relatório de métricas de performance
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log);
}
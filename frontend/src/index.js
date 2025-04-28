import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Configuração inicial do app
function initializeApp() {
  const container = document.getElementById('root');
  
  if (!container) {
    throw new Error(
      "Elemento root não encontrado. Verifique se existe um elemento com ID 'root' no seu HTML."
    );
  }

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  // Configuração de Web Vitals apenas em produção
  if (process.env.NODE_ENV === 'production') {
    reportWebVitals(console.log);
    // Ou enviar para um serviço de analytics:
    // reportWebVitals(sendToAnalytics);
  }
}

// Inicializa a aplicação
initializeApp();
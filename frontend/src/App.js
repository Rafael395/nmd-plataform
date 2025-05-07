import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Removido Router da importação
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Blog from './pages/Blog/blog';
import Contact from './pages/Contact/contact';
import Login from './pages/Login/login';
import CadastroCandidato from './pages/cadastro/CadastroCandidato';
import CadastroEmpresa from './pages/cadastro/CadastroEmpresa';
import DashboardCandidato from './pages/Dashboard/Candidato/DashboardCandidato';
import DashboardEmpresa from './pages/Dashboard/Empresa/DashboardEmpresa';
import NotFound from './pages/NotFound/NotFound';

// Componentes de layout reutilizáveis
const PublicRoute = ({ children }) => (
  <>
    <Header />
    <main className="app-content">{children}</main>
    <Footer />
  </>
);

const DashboardRoute = ({ children }) => (
  <main className="dashboard-content">{children}</main>
);

export default function App() {
  return (
    // Removido <Router> daqui (já está no index.js)
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
      <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />
      <Route path="/blog" element={<PublicRoute><Blog /></PublicRoute>} />
      <Route path="/contact" element={<PublicRoute><Contact /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/cadastro/candidato" element={<PublicRoute><CadastroCandidato /></PublicRoute>} />
      <Route path="/cadastro/empresa" element={<PublicRoute><CadastroEmpresa /></PublicRoute>} />

      {/* Rotas de Dashboard */}
      <Route path="/candidato" element={<DashboardRoute><DashboardCandidato /></DashboardRoute>} />
      <Route path="/empresa" element={<DashboardRoute><DashboardEmpresa /></DashboardRoute>} />

      {/* Redirecionamentos */}
      <Route path="/sobre" element={<Navigate to="/about" replace />} />

      {/* Rota 404 */}
      <Route path="*" element={<PublicRoute><NotFound /></PublicRoute>} />
    </Routes>
  );
}
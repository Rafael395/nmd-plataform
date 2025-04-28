import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Adicionado Navigate
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Blog from './pages/Blog/blog';
import Contact from './pages/Contact/contact';
import Login from './pages/Login/login';
import CadastroCandidato from './pages/Cadastro/CadastroCandidato';
import CadastroEmpresa from './pages/Cadastro/CadastroEmpresa';
import DashboardCandidato from './pages/Dashboard/Candidato/DashboardCandidato';
import DashboardEmpresa from './pages/Dashboard/Empresa/DashboardEmpresa';
import NotFound from './pages/NotFound/NotFound'; // Adicionado import do NotFound

// Componente para rotas públicas
const PublicRoute = ({ children }) => (
  <>
    <Header />
    <main className="app-content">{children}</main>
    <Footer />
  </>
);

// Componente para rotas de dashboard (sem header/footer padrão)
const DashboardRoute = ({ children }) => (
  <main className="dashboard-content">{children}</main>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PublicRoute>
              <About />
            </PublicRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PublicRoute>
              <Blog />
            </PublicRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/cadastro/candidato"
          element={
            <PublicRoute>
              <CadastroCandidato />
            </PublicRoute>
          }
        />
        <Route
          path="/cadastro/empresa"
          element={
            <PublicRoute>
              <CadastroEmpresa />
            </PublicRoute>
          }
        />
        
        {/* Rotas de Dashboard */}
        <Route
          path="/candidato"
          element={
            <DashboardRoute>
              <DashboardCandidato />
            </DashboardRoute>
          }
        />
        <Route
          path="/empresa"
          element={
            <DashboardRoute>
              <DashboardEmpresa />
            </DashboardRoute>
          }
        />
        
        {/* Redirecionamentos */}
        <Route path="/sobre" element={<Navigate to="/about" replace />} />
        
        {/* Rota 404 */}
        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
      </Routes>
    </Router>
  );
}
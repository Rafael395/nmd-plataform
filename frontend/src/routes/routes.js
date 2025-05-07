import React from 'react';
import Login from '../pages/login/login'; // Padronizado para PascalCase
import CadastroCandidato from '../pages/cadastro/CadastroCandidato';
import CadastroEmpresa from '../pages/cadastro/CadastroEmpresa';
import DashboardCandidato from '../pages/Dashboard/Candidato/DashboardCandidato';
import DashboardEmpresa from '../pages/Dashboard/Empresa/DashboardEmpresa';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/contact/contact'; // Padronizado para PascalCase

// Rotas Públicas Principais
export const mainRoutes = [
  { 
    path: '/', 
    element: <Home />,
    name: 'Home'
  },
  { 
    path: '/about', 
    element: <About />,
    name: 'Sobre'
  },
  { 
    path: '/blog', 
    element: <Blog />,
    name: 'Blog'
  },
  { 
    path: '/contact', 
    element: <Contact />,
    name: 'Contato'
  }
];

// Rotas de Autenticação
export const authRoutes = [
  { 
    path: '/login', 
    element: <Login />,
    name: 'Login'
  },
  { 
    path: '/cadastro/candidato', 
    element: <CadastroCandidato />,
    name: 'Cadastro Candidato'
  },
  { 
    path: '/cadastro/empresa', 
    element: <CadastroEmpresa />,
    name: 'Cadastro Empresa'
  },
  { 
    path: '/candidato', 
    element: <DashboardCandidato />,
    name: 'Dashboard Candidato',
    protected: true
  },
  { 
    path: '/empresa', 
    element: <DashboardEmpresa />,
    name: 'Dashboard Empresa',
    protected: true
  }
];

// Rotas Legado/Redirecionamento
export const legacyRoutes = [
  {
    path: '/sobre',
    redirect: '/about'
  }
];
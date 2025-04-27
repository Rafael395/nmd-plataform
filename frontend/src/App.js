import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Blog from './pages/Blog/blog';
import Contact from './pages/Contact/contact';
import Login from './pages/Login/login';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          
          {/* Optional: Redirect for old '/sobre' route */}
          <Route path="/sobre" element={<About />} />
          
          {/* Optional: 404 Page */}
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
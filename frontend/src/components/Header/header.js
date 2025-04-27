import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './header.css'; // Importação do CSS

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-nmd">NMD</span>
          <span className="logo-subtitle">Talent Intelligence</span>
        </Link>

        <nav className="navigation">
          <div className="nav-links">
            <Link to="/about" className="nav-link">Sobre Nós</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contato</Link>
          </div>
          
          <Link to="/login" className="login-button">
            Área do Cliente
            <FiArrowRight className="button-icon" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import './footer.css'; // Arquivo CSS separado

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">NMD</span>
            <span className="footer-slogan">Talent Intelligence Platform</span>
          </div>
          
          <div className="footer-links">
            <a href="/terms" className="footer-link">Termos de Serviço</a>
            <a href="/privacy" className="footer-link">Política de Privacidade</a>
            <a href="/contact" className="footer-link">Contato Comercial</a>
          </div>
          
          <div className="footer-social">
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://github.com" className="social-icon" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} NMD Technologies. Todos os direitos reservados.</p>
          <p className="footer-legal">CNPJ: 00.000.000/0000-00</p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validação básica
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }
    
    // Lógica de login (simulada)
    if (email.includes('candidato')) {
      navigate('/candidato');
    } else if (email.includes('empresa')) {
      navigate('/empresa');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="login-page">
      {/* Formulário de Login */}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        
        <div className="login-footer">
          <p>Não tem uma conta? <span onClick={() => setShowRegisterModal(true)}>Cadastre-se</span></p>
          <p className="forgot-password">Esqueceu sua senha?</p>
        </div>
      </div>
      
      {/* Modal de Cadastro */}
      {showRegisterModal && (
        <div className="modal-overlay">
          <div className="register-modal">
            <h3>Criar Nova Conta</h3>
            <p>Selecione o tipo de conta:</p>
            
            <div className="account-type-selector">
              <button 
                className="account-type candidate"
                onClick={() => navigate('/cadastro/candidato')}
              >
                Sou Candidato
              </button>
              <button 
                className="account-type company"
                onClick={() => navigate('/cadastro/empresa')}
              >
                Sou Empresa
              </button>
            </div>
            
            <button 
              className="close-modal"
              onClick={() => setShowRegisterModal(false)}
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
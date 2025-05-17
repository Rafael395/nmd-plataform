import React, { useState } from 'react';
import { supabase } from '../../config/supabase';
import './CadastroCandidato.css';

export default function CadastroCandidato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    aceitarTermos: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.aceitarTermos) {
      setError('Você deve aceitar os termos de uso');
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.senha,
        options: {
          data: {
            full_name: formData.nome
          }
        }
      });

      if (error) throw error;
      alert('Cadastro realizado com sucesso! Verifique seu e-mail');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-candidato-page">
      <div className="cadastro-candidato-container">
        <div className="cadastro-candidato-header">
          <h1>NMD</h1>
          <h2>TALENT INTELLIGENCE</h2>
        </div>

        <div className="cadastro-candidato-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Senha"
                value={formData.senha}
                onChange={(e) => setFormData({...formData, senha: e.target.value})}
                required
              />
            </div>

            <div className="terms-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.aceitarTermos}
                  onChange={(e) => setFormData({...formData, aceitarTermos: e.target.checked})}
                  required
                />
                <span className="checkmark"></span>
                Li e aceito os <a href="/termos-de-uso" target="_blank">Termos de Serviço</a> e <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>
              </label>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" disabled={loading || !formData.aceitarTermos}>
              {loading ? 'Cadastrando...' : 'CADASTRAR'}
            </button>
          </form>
        </div>

        <div className="cadastro-candidato-footer">
          <div className="footer-links">
            <a href="/termos-de-uso">Termos de Serviço</a>
            <span>|</span>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <span>|</span>
            <a href="/contato">Contato Comercial</a>
          </div>
          <p>© 2024 NMD Technologies. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
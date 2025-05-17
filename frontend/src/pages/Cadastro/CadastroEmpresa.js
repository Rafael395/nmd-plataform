import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../config/supabase';
import Header from '../../components/Header/header'; // Importando o header padrão
import Footer from '../../components/Footer/footer'; // Importando o footer padrão
import './Cadastro.css';

export default function CadastroEmpresa() {
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    email: '',
    password: '',
    phone: '',
    businessArea: 'tecnologia',
    acceptTerms: false
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      alert('Você deve aceitar os termos de uso');
      return;
    }

    setLoading(true);

    try {
      // Lógica de cadastro (mantida do código original)
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      const { error: companyError } = await supabase
        .from('companies')
        .insert({
          id: authData.user.id,
          company_name: formData.companyName,
          cnpj: formData.cnpj,
          email: formData.email,
          phone: formData.phone,
          business_area: formData.businessArea
        });

      if (companyError) throw companyError;

      navigate('/empresa/dashboard');
    } catch (error) {
      console.error('Erro no cadastro:', error.message);
      alert('Erro ao cadastrar: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <Header /> {/* Header padrão importado */}
      
      <main className="cadastro-content">
        <div className="cadastro-card">
          <h1>Cadastro de Empresa</h1>
          <p className="subtitle">Preencha os dados abaixo para criar sua conta</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Nome da empresa"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                placeholder="CNPJ"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail corporativo"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Senha"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefone para contato"
                required
              />
            </div>
            
            <div className="form-group">
              <select
                name="businessArea"
                value={formData.businessArea}
                onChange={handleChange}
                required
              >
                <option value="tecnologia">Tecnologia</option>
                <option value="saude">Saúde</option>
                <option value="educacao">Educação</option>
              </select>
            </div>
            
            <div className="terms-group">
              <label>
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                />
                Aceito os termos de uso
              </label>
            </div>
            
            <button type="submit" disabled={loading}>
              {loading ? 'Cadastrando...' : 'CADASTRAR EMPRESA'}
            </button>
          </form>
        </div>
      </main>
      
      <Footer /> {/* Footer padrão importado */}
    </div>
  );
}
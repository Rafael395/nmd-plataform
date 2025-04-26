import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Seção Hero */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="logo-marker">NMD</div>
          <h1>
            <span className="highlight">Precisão</span> em Gestão de <span className="highlight">Talentos</span>
          </h1>
          <p className="subtitle">
            Tecnologia avançada de avaliação para empresas que <span className="bold">não aceitam mediocridade</span> em seus processos de recrutamento
          </p>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="differentials-section">
        <div className="section-header">
          <h2>Metodologia Exclusiva</h2>
          <p>Algoritmos patenteados que redefinem a excelência em contratação</p>
        </div>
        
        <div className="value-props">
          <div className="prop-card">
            <div className="card-icon">⟠</div>
            <h3>Triagem Quântica</h3>
            <p>Análise multidimensional de competências com precisão inédita no mercado</p>
          </div>
          
          <div className="prop-card">
            <div className="card-icon">⌖</div>
            <h3>Benchmarking Neural</h3>
            <p>Comparações setoriais baseadas em redes neurais profundas</p>
          </div>
          
          <div className="prop-card">
            <div className="card-icon">⍟</div>
            <h3>Predição Estocástica</h3>
            <p>Modelos que antecipam o sucesso profissional com 94% de acerto</p>
          </div>
        </div>
      </section>

      {/* Seção de Caso de Uso */}
      <section className="case-section">
        <div className="case-overlay"></div>
        <div className="case-content">
          <div className="case-text">
            <h2>Transformação Mensurável</h2>
            <p className="case-description">
              "A implementação da NMD elevou nosso índice de acertos em contratações técnicas de 62% para 89% em 6 meses, 
              com redução de 75% no turnover de novos colaboradores."
            </p>
            <div className="case-details">
              <div className="metric">
                <span className="metric-value">5.2x</span>
                <span className="metric-label">Retorno</span>
              </div>
              <div className="metric">
                <span className="metric-value">96%</span>
                <span className="metric-label">Adoção</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="resources-section">
        <div className="section-header">
          <h2>Arquitetura de Ponta</h2>
          <p>Tecnologia invisível, resultados tangíveis</p>
        </div>
        
        <div className="features-grid">
          <div className="feature">
            <h3>Privacidade Zero-Knowledge</h3>
            <p>Seus dados permanecem criptografados end-to-end</p>
          </div>
          <div className="feature">
            <h3>Deploy Federado</h3>
            <p>Implantação em nuvem privada ou infraestrutura existente</p>
          </div>
          <div className="feature">
            <h3>Atualizações Contínuas</h3>
            <p>Melhorias semanais sem downtime</p>
          </div>
          <div className="feature">
            <h3>Conformidade Global</h3>
            <p>GDPR, CCPA e LGPD out-of-the-box</p>
          </div>
        </div>
      </section>
    </div>
  );
}
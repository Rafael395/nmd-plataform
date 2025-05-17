import React from 'react';
import './DashboardCandidato.css';

export default function DashboardCandidato() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="user-profile">
          <div className="user-avatar">JD</div>
          <div className="user-info">
            <h1>João da Silva</h1>
            <p className="user-title">Desenvolvedor Full Stack</p>
            <div className="user-stats">
              <span>★ 4.8 Avaliação</span>
              <span>✓ 5 Testes completos</span>
              <span>↗ 12 Empresas interessadas</span>
            </div>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-primary">Atualizar Perfil</button>
          <button className="btn-secondary">Visualizar como Recrutador</button>
        </div>
      </header>

      {/* Cards de Status */}
      <section className="status-cards">
        <div className="card">
          <h3>Seu Progresso</h3>
          <div className="progress-circle" data-progress="75">
            <span>75%</span>
          </div>
          <p>Complete seu perfil para aumentar suas chances</p>
        </div>

        <div className="card">
          <h3>Próximos Passos</h3>
          <ul className="steps-list">
            <li className="completed">✓ Perfil básico</li>
            <li className="completed">✓ Experiência profissional</li>
            <li className="current">⏳ Teste de habilidades</li>
            <li>○ Entrevista simulada</li>
          </ul>
          <button className="btn-accent">Realizar Testes</button>
        </div>

        <div className="card">
          <h3>Match com Vagas</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '82%'}}></div>
          </div>
          <p>82% de compatibilidade</p>
          <button className="btn-link">Ver vagas recomendadas →</button>
        </div>
      </section>

      {/* Oportunidades */}
      <section className="dashboard-section">
        <div className="section-header">
          <h2>Oportunidades em Destaque</h2>
          <p>Vagas com alto grau de compatibilidade</p>
        </div>
        
        <div className="card-grid">
          <div className="card highlight">
            <div className="card-badge">NMD</div>
            <h3>Desenvolvedor React Senior</h3>
            <div className="card-meta">
              <span>Remoto</span>
              <span>R$ 12.000 - 15.000</span>
              <span>95% Match</span>
            </div>
            <p>Projeto inovador utilizando React 18 e GraphQL...</p>
            <button className="btn-primary">Candidatar-se</button>
          </div>

          <div className="card">
            <div className="card-badge">QT</div>
            <h3>Arquiteto de Software</h3>
            <div className="card-meta">
              <span>Híbrido - SP</span>
              <span>R$ 18.000 - 22.000</span>
              <span>88% Match</span>
            </div>
            <p>Liderança técnica de equipe multidisciplinar...</p>
            <button className="btn-primary">Candidatar-se</button>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="dashboard-section">
        <div className="section-header">
          <h2>Seu Perfil Técnico</h2>
          <p>Análise baseada em seus testes e histórico</p>
        </div>
        
        <div className="skills-container">
          <div className="skills-chart">
            {/* Gráfico de habilidades seria implementado aqui */}
            <div className="chart-placeholder"></div>
          </div>
          
          <div className="skills-list">
            <h3>Recomendações</h3>
            <ul>
              <li>
                <span>Testes unitários</span>
                <button className="btn-small">Estudar</button>
              </li>
              <li>
                <span>Arquitetura hexagonal</span>
                <button className="btn-small">Aprender</button>
              </li>
              <li>
                <span>WebAssembly</span>
                <button className="btn-small">Explorar</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
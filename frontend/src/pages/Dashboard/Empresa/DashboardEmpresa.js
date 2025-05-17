import React from 'react';
import './DashboardEmpresa.css';

export default function DashboardEmpresa() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="user-profile">
          <div className="user-avatar">NMD</div>
          <div className="user-info">
            <h1>NMD Technologies</h1>
            <p className="user-title">Tecnologia • 50-200 funcionários</p>
            <div className="user-stats">
              <span>★ 4.9 Avaliação</span>
              <span>✓ 15 Vagas abertas</span>
              <span>↗ 120 Candidatos ativos</span>
            </div>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-primary">Publicar Vaga</button>
          <button className="btn-secondary">Relatórios</button>
        </div>
      </header>

      {/* Cards de Status */}
      <section className="status-cards">
        <div className="card">
          <h3>Performance de Contratação</h3>
          <div className="progress-circle" data-progress="68">
            <span>68%</span>
          </div>
          <p>Taxa de sucesso nos últimos 6 meses</p>
        </div>

        <div className="card">
          <h3>Próximos Processos</h3>
          <ul className="steps-list">
            <li className="completed">✓ Entrevistas técnicas</li>
            <li className="current">⏳ Avaliação cultural</li>
            <li>○ Propostas finais</li>
          </ul>
          <button className="btn-accent">Gerenciar Processos</button>
        </div>

        <div className="card">
          <h3>Candidatos em Destaque</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '45%'}}></div>
          </div>
          <p>45% acima da média do mercado</p>
          <button className="btn-link">Ver candidatos →</button>
        </div>
      </section>

      {/* Candidatos */}
      <section className="dashboard-section">
        <div className="section-header">
          <h2>Candidatos Recomendados</h2>
          <p>Perfis com melhor match para suas vagas</p>
        </div>
        
        <div className="card-grid">
          <div className="card highlight">
            <div className="card-badge">AM</div>
            <h3>Ana Mendes</h3>
            <div className="card-meta">
              <span>Frontend Lead</span>
              <span>★ 4.8 Avaliação</span>
              <span>92% Match</span>
            </div>
            <p>8 anos de experiência com React e TypeScript...</p>
            <button className="btn-primary">Entrar em Contato</button>
          </div>

          <div className="card">
            <div className="card-badge">CR</div>
            <h3>Carlos Rocha</h3>
            <div className="card-meta">
              <span>DevOps Engineer</span>
              <span>★ 4.6 Avaliação</span>
              <span>88% Match</span>
            </div>
            <p>Especialista em AWS e infraestrutura escalável...</p>
            <button className="btn-primary">Entrar em Contato</button>
          </div>
        </div>
      </section>

      {/* Vagas */}
      <section className="dashboard-section">
        <div className="section-header">
          <h2>Suas Vagas Ativas</h2>
          <p>Processos seletivos em andamento</p>
        </div>
        
        <div className="skills-container">
          <div className="skills-chart">
            {/* Gráfico de vagas seria implementado aqui */}
            <div className="chart-placeholder"></div>
          </div>
          
          <div className="skills-list">
            <h3>Ações Rápidas</h3>
            <ul>
              <li>
                <span>Frontend Developer</span>
                <button className="btn-small">Ver candidatos</button>
              </li>
              <li>
                <span>UX Designer</span>
                <button className="btn-small">Agendar entrevistas</button>
              </li>
              <li>
                <span>Product Manager</span>
                <button className="btn-small">Finalizar processo</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
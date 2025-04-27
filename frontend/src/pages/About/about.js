import React from 'react';
import './about.css';

const About = () => {
  const team = [
    {
      id: 1,
      name: "Rafael",
      role: "Fundador & Líder Técnico",
      bio: "Arquiteto de software com 10+ anos de experiência em sistemas de gestão de talentos.",
      img: "/images/team/rafael.jpg",
      founder: true
    },
    {
      id: 2,
      name: "Washington Luiz",
      role: "Especialista em UX/UI",
      bio: "Designer premiado com foco em experiências intuitivas para RH.",
      img: "/images/team/washington.jpg"
    },
    {
      id: 3,
      name: "Jorge Matheus",
      role: "Engenheiro de Dados",
      bio: "Especialista em big data e algoritmos de matching de talentos.",
      img: "/images/team/jorge.jpg"
    },
    {
      id: 4,
      name: "Matheus Rafael",
      role: "Front-end Lead",
      bio: "Desenvolvedor especializado em interfaces ricas para gestão de pessoas.",
      img: "/images/team/matheus.jpg"
    },
    {
      id: 5,
      name: "Victor Antonio",
      role: "QA & Segurança",
      bio: "Garante a excelência técnica e conformidade com LGPD de todas as soluções.",
      img: "/images/team/victor.jpg"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Nossa Equipe</h1>
          <p className="hero-subtitle">Especialistas em tecnologia para gestão de talentos</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="about-main-content">
        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <h2>Conheça o Time</h2>
            <p className="section-subtitle">Profissionais dedicados à excelência em People Analytics</p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <div 
                key={member.id}
                className={`team-card ${member.founder ? 'founder' : ''}`}
              >
                <div className="member-image-container">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="member-image"
                    loading="lazy"
                  />
                  {member.founder && <span className="founder-badge">Fundador</span>}
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2 className="mission-title">Nossa Tecnologia</h2>
            <p className="mission-text">
              Combinamos inteligência artificial com psicometria avançada para oferecer a plataforma
              mais precisa do mercado em avaliação e matching de talentos.
            </p>
            <div className="mission-stats">
              <div className="stat-card">
                <span className="stat-number">+89%</span>
                <span className="stat-label">Precisão</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">5.2x</span>
                <span className="stat-label">ROI</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Disponibilidade</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
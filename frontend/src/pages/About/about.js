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

  const values = [
    {
      title: "Inovação Contínua",
      description: "Pesquisa e desenvolvimento constantes para soluções de ponta"
    },
    {
      title: "Transparência",
      description: "Processos claros e algoritmos auditáveis"
    },
    {
      title: "Ética em Dados",
      description: "Respeito absoluto à privacidade e legislação"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Nossa Equipe</h1>
          <p>Especialistas em tecnologia para gestão de talentos</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>Conheça o Time</h2>
          <p>Profissionais dedicados à excelência em People Analytics</p>
        </div>
        
        <div className="team-grid">
          {team.map((member) => (
            <div 
              key={member.id}
              className={`team-card ${member.founder ? 'founder' : ''}`}
            >
              <div className="member-image">
                <img 
                  src={member.img} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = '/images/placeholder-user.png';
                  }}
                />
                {member.founder && <span className="founder-badge">Fundador</span>}
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Nossa Missão</h2>
          <p>
            Desenvolver soluções tecnológicas que simplificam processos e conectam pessoas, 
            com código de qualidade e design centrado no usuário.
          </p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import './blog.css'; // Criaremos este CSS

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "O Futuro da Contratação Baseada em Dados",
      excerpt: "Como a inteligência artificial está revolucionando os processos de recrutamento e seleção.",
      date: "15 MAIO 2023",
      category: "Tendências",
      readTime: "5 min de leitura",
      image: "/images/blog/recrutamento-ia.jpg"
    },
    {
      id: 2,
      title: "Métricas que Importam em People Analytics",
      excerpt: "Descubra os KPIs essenciais para medir o sucesso na gestão de talentos.",
      date: "28 ABRIL 2023",
      category: "Análise",
      readTime: "7 min de leitura",
      image: "/images/blog/metricas-rh.jpg"
    },
    {
      id: 3,
      title: "Como Implementar Avaliações Objetivas",
      excerpt: "Guia prático para eliminar vieses inconscientes nos processos seletivos.",
      date: "10 ABRIL 2023",
      category: "Como Fazer",
      readTime: "6 min de leitura",
      image: "/images/blog/avaliacoes.jpg"
    }
  ];

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="highlight">NMD</span> Blog
          </h1>
          <p className="subtitle">
            Insights e análises sobre <span className="bold">gestão de talentos orientada por dados</span>
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="section-header">
          <h2>Últimos Artigos</h2>
          <p>Conteúdo exclusivo para profissionais de RH e gestores</p>
        </div>
        
        <div className="posts-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="post-image"
                  onError={(e) => {
                    e.target.src = '/images/blog/placeholder.jpg';
                  }}
                />
                <span className="post-category">{post.category}</span>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">
                  Ler Artigo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Assine Nossa Newsletter</h2>
          <p>
            Receba conteúdos exclusivos e atualizações sobre People Analytics
            diretamente no seu e-mail
          </p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-button">
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
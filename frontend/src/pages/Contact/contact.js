import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="highlight">Fale</span> Conosco
          </h1>
          <p className="subtitle">
            Tem dúvidas ou quer saber mais sobre nossas soluções? <span className="bold">Estamos aqui para ajudar</span>
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Info */}
        <section className="contact-info-section">
          <div className="section-header">
            <h2>Nossos Canais</h2>
            <p>Escolha a forma de contato mais conveniente para você</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>E-mail</h3>
              <p>comercial@nmdtech.com</p>
              <a href="mailto:comercial@nmdtech.com" className="contact-link">
                Enviar Mensagem
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Telefone</h3>
              <p>(11) 99999-9999</p>
              <a href="tel:+5511999999999" className="contact-link">
                Ligar Agora
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Escritório</h3>
              <p>Av. Paulista, 1000<br/>São Paulo - SP, 01310-100</p>
              <a 
                href="https://maps.google.com?q=Av.+Paulista,+1000,Sao+Paulo,SP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                Ver no Mapa
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="section-header">
            <h2>Envie sua Mensagem</h2>
            <p>Responderemos em até 24 horas úteis</p>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Seu nome completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="seu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <select id="subject" name="subject" required>
                <option value="">Selecione...</option>
                <option value="commercial">Comercial</option>
                <option value="support">Suporte Técnico</option>
                <option value="partnership">Parcerias</option>
                <option value="other">Outros</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
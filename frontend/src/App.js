import React, { useState } from 'react';
import './App.css';

function App() {
  const [candidato, setCandidato] = useState({
    id: '',
    nome: '',
    respostas: []
  });
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/testes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          candidatoId: candidato.id,
          respostas: candidato.respostas
        })
      });
      
      const data = await response.json();
      setResultado(data);
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar teste!');
    } finally {
      setLoading(false);
    }
  };

  const handleRespostaChange = (index, valor) => {
    const novasRespostas = [...candidato.respostas];
    novasRespostas[index] = valor;
    setCandidato({...candidato, respostas: novasRespostas});
  };

  // Questões de exemplo (substitua pelas suas)
  const questoes = [
    "1. O que é um closure em JavaScript?",
    "2. Como funciona o event loop?",
    "3. Diferença entre let, const e var"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>NMD - Teste Técnico</h1>
        
        {!resultado ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                ID do Candidato:
                <input 
                  type="text" 
                  value={candidato.id}
                  onChange={(e) => setCandidato({...candidato, id: e.target.value})}
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Nome:
                <input 
                  type="text" 
                  value={candidato.nome}
                  onChange={(e) => setCandidato({...candidato, nome: e.target.value})}
                  required
                />
              </label>
            </div>

            <h3>Questões Técnicas:</h3>
            {questoes.map((questao, index) => (
              <div key={index} className="questao">
                <p>{questao}</p>
                <select 
                  onChange={(e) => handleRespostaChange(index, e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="A">Resposta A</option>
                  <option value="B">Resposta B</option>
                  <option value="C">Resposta C</option>
                </select>
              </div>
            ))}

            <button type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Submeter Teste'}
            </button>
          </form>
        ) : (
          <div className="resultado">
            <h2>Resultado</h2>
            <p>ID: {resultado.candidatoId}</p>
            <p>Pontuação: {resultado.pontuacao}/100</p>
            <p>{resultado.mensagem}</p>
            <button onClick={() => setResultado(null)}>
              Novo Teste
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
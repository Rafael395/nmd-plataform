require('dotenv').config(); // Adicione no topo para usar variáveis de ambiente
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// Configuração do Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Backend da NMD - Plataforma de Recrutamento em TI');
});

// Rota para processar testes
app.post('/api/testes', async (req, res) => {
  try {
    const { candidatoId, nome, email, respostas } = req.body;
    
    // 1. Calcula pontuação (exemplo: 1 ponto por resposta "C")
    const pontuacao = respostas.filter(r => r === "C").length * 20;
    
    // 2. Salva no Supabase
    const { data, error } = await supabase
      .from('candidatos')
      .insert([
        { 
          id: candidatoId,
          nome,
          email,
          respostas: JSON.stringify(respostas),
          pontuacao,
          data_teste: new Date()
        }
      ]);

    if (error) throw error;

    res.json({
      sucesso: true,
      candidatoId,
      pontuacao,
      mensagem: "Teste avaliado e armazenado com sucesso!",
      dados_supabase: data
    });

  } catch (error) {
    console.error('Erro no Supabase:', error);
    res.status(500).json({ 
      sucesso: false, 
      erro: "Erro ao processar teste",
      detalhes: error.message 
    });
  }
});

// Nova rota para consultar resultados
app.get('/api/resultados/:empresaId', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('candidatos')
      .select('*')
      .order('pontuacao', { ascending: false });

    if (error) throw error;

    res.json({
      sucesso: true,
      candidatos: data
    });
  } catch (error) {
    res.status(500).json({ sucesso: false, erro: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const express = require('express');
const app = express();

app.get('/day', (req, res) => {
  const now = new Date();
  const day = now.getUTCDay(); // Retorna o dia da semana (0 para domingo, 6 para sábado)
  const hours = now.getUTCHours(); // Retorna a hora no formato UTC
  const minutes = now.getUTCMinutes(); // Retorna os minutos no formato UTC

  // Converter para horário de Brasília (UTC-3)
  const offset = -3; // Ajuste conforme necessário
  const brasiliaHours = (hours + offset + 24) % 24;

  // Verificar se é de segunda a sexta
  if (day >= 1 && day <= 5) {
    // Verificar se está no intervalo de horário permitido
    const isMorning = (brasiliaHours === 7 && minutes >= 30) || (brasiliaHours > 7 && brasiliaHours < 11) || (brasiliaHours === 11 && minutes <= 30);
    const isAfternoon = (brasiliaHours === 12 && minutes >= 30) || (brasiliaHours > 12 && brasiliaHours < 17);

    if (isMorning || isAfternoon) {
      res.json({ dayOfWeek: day });
    } else {
      res.status(403).json({ error: 'Access not allowed at this time.' });
    }
  } else {
    res.status(403).json({ error: 'Access not allowed on weekends.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

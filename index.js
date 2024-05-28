const express = require('express');
const app = express();

app.get('/day', (req, res) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  res.json({ dayOfWeek });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

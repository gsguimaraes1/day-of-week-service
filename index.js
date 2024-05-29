const express = require('express');
const app = express();

app.get('/day', (req, res) => {
  const now = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[now.getDay()];
  res.json({ dayOfWeek });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

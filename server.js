const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on http://127.0.0.1:${PORT} || http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const routes = require('./routes/index');

app.use(express.json());
app.use(express.static('public'));

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

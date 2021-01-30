const express = require('express');
const router = require('./view/route');

const app = express();

app.use('/api/', router);
const port = 3456;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
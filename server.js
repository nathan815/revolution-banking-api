const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.get('/', function(req, res) {
  res.send('Hello world')
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
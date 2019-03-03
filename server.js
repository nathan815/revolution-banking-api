const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Setup the routes
require('./app/routes')(app);

const port = 8000;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
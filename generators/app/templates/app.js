const path = require('path');
const express = require('express');
const enrouten = require('express-enrouten');
const config = require('./config');

/* eslint-disable no-console */

const app = express();

app.use('/<%= serviceApiRoot %>', enrouten({
  directory: path.join(__dirname, 'controllers'),
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = config.get('PORT');

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;

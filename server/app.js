const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');

const dbConnection = require('./database/connection');
const routes = require('./routes');
const { clientError, serverError } = require('./controllers/errorHandle');

const app = express();

app.use(compression());
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

dbConnection
  .on('open', () => console.log('Database Is Connected'))
  .on('error', () => process.exit(1));

app.use('/api/v1/', routes);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

module.exports = app;

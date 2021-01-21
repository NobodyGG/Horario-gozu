const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/materias', require('./routes/materias'));
app.use('/api/horarios', require('./routes/horarios'));

module.exports = app;

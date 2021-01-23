const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended= false}));

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/materias', require('./routes/materias'));
app.use('/api/horarios', require('./routes/horarios'));
app.use(require('./controllers/auth.controller'));

module.exports = app;

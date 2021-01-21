const mongoose = require('mongoose');

const URI = process.env.MONGO_URI 
? process.env.MONGO_URI
: 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('DB is connected');
})
const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
        .connect(db,{useNewUrlParser:true})
        .then(()=> console.log('MongoDB Connected...'))
        .catch (err=> console.log(err));

app.use('/api/items',items);

const port = process.env.PORT || 5000 ;
app.listen(port,()=> console.log('Server started on port ${port}'));

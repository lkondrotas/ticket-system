const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) =>{
    res.send('Home')
});

//DB Connection
mongoose.connect(process.env.DB_Connect, () =>{
    console.log('Connected to DB')
});

app.get('/page', (req, res) => {
    res.send('Page')
});

app.listen(process.env.PORT);
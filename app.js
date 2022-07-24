const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const userRoutes = require('./routes/users')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

});

app.use('/users', userRoutes)

app.listen(process.env.PORT || 5000, () => {
    console.log("Sever is now listening at port 5000");
});

database.connect();


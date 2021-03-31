'use strict';

// Test Docker setup

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users/:userId', (req, res) => {
    res.send(req.params);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

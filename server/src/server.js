'use strict';

// Test Docker setup

const express = require('express');

const db = require('./db/db');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users/:userId', (req, res) => {
    if (typeof req.params.userId === 'string' || req.params.userId instanceof String) {
	res.send(req.params);
    }
    // else {}
});


app.get("/users", async (req, res) => {
    try {
	const allUsers = await db.query("SELECT * FROM users");
	res.json(allUsers.rows);
    } catch (err) {
	console.error(err.message);
    }
});

app.post('/users', async (req, res) => {
    try {
	const { cups_of_tea } = req.body;
	console.log(cups_of_tea);
	const newCup = await db.query(
	    "INSERT INTO users (cups_of_tea) VALUES ($1) RETURNING *", [cups_of_tea]);
	res.json(newCup.rows[0]);
    } catch (err) {
	console.error(err.message);
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

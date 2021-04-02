const { Pool, Client } = require('pg')

const pool = new Pool({
    "user":     "postgres",
    "password": "postgres",
    "host":     "cups-of-tea_postgres_1",
    "database": "tea",
    "port":      5432
});

module.exports = pool;

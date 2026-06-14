const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'one_creativity_db',
  password: '12345678', // Replace this with your actual database password
  port: 5432,
});

module.exports = pool;

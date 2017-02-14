import mysql from 'mysql';
require('dotenv').config();

let pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.SR_HOST,
  user: process.env.SR_USER,
  password: process.env.SR_PASS
});

export default pool;

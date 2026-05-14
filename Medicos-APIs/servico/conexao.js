import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MD_HOST,
    user: process.env.MD_USER,
    password: process.env.MD_PASSWORD,
    database: process.env.MD_DATABASE
})

export default pool;

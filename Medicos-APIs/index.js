import express from 'express';
import pool from './servico/conexao.js';
import { PoolConnection } from 'mysql2';

const app = express();

app.listen(9000, async() => {
    const data = new Date();
    const conexao = await pool.getConnection();

    console.log(`Servidor iniciado em ${data}`);
    console.log(conexao.threadId);

    conexao.release();
})
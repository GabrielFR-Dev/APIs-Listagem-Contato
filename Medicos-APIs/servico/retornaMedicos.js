import pool from './conexao.js';


export async function retornaMedicos() {
    const conexao = await pool.getConnection();

    const query = await conexao.query('SELECT * FROM medicos');

    const query_resultado = query[0];

    conexao.release();

    return query_resultado
}
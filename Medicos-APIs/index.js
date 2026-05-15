import express from 'express';
import pool from './servico/conexao.js';
import { retornaMedicos, retornaMedicosID } from './servico/retornaMedicos.js';


const app = express();


app.get('/medicos', async(req, res) => {
    
    const medicos = await retornaMedicos();
    res.json(medicos);

});

app.get('/medicos/:id', async(req, res) => {
    const id = parseInt(req.params.id);

    const medicosID = await retornaMedicosID(id);

    if(medicosID.length > 0) {
        res.json(medicosID);
    }else{
        res.status(404).json({mesagem: "NENHUM MEDICO ENCONTRADO"});
    }
});

const port = process.env.PORT || 3000;
app.listen(port, async() => {
    const data = new Date();
    const conexao = await pool.getConnection();

    console.log(`Servidor iniciado na porta ${port} em ${data}`);
    

    conexao.release();
})
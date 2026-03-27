const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('db_produto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    lote: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    validade: {
        type: DataTypes.DATE, 
        allowNull: false,    
    },
});

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('API Funcionando!');
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

app.post('/produtos', async (req, res) => {
    try {
        const {nome, lote, validade} = req.body;
        const novoProduto = await Produto.create({nome, lote, validade});
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({error: "Produto já cadastrado."});
    }   
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados');
});
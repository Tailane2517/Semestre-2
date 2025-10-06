const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('db_funcionario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    cpf: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    },
    rg: {
        type: DataTypes.DATE, 
        allowNull: false,  
        unique: true  
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    data_nascimento: {
        type: DataTypes.DATE, 
        allowNull: false,
        unique: true
    },
    salario: {
        type: DataTypes.FLOAT, 
        allowNull: false,    
    },
    telefone: {
        type: DataTypes.STRING, 
        allowNull: false,   
        unique: true
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    },
});

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('API Funcionando!');
});

app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

app.post('/funcionarios', async (req, res) => {
    try {
        const {nome, cpf, rg, matricula, data_nascimento, salario, telefone, email} = req.body;
        const novofuncionario = await Produto.create({nome, cpf, rg, matricula, data_nascimento, salario, telefone, email});
        res.status(201).json(novofuncionario);
    } catch (error) {
        res.status(400).json({error: "Funcionario já cadastrado."});
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
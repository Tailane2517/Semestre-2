const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Configuração do Sequelize para conectar ao banco de dados MySQL
const sequelize = new Sequelize('db_aula', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definição da tabela de usuário.
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Configuração do servidor Express.
const app = express(); //Criação da aplicação Express.
app.use(cors()); //Habilita o CORS para permitir requisições do frontend.
app.use(express.json());// Middleware para interpretar JSON no corpo das requisições.
const port = 3000; // Porta onde o servidor irá escutar.

// Criando rotas da API.
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
});      

app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const novoUsuario = await Usuario.create({ nome, email, telefone });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ message: 'Verifique se o e-mail já existe.' });
    }   
});

//Inicia o servidor apos sicronizar criar tabela no banco de dados.
sequelize.sync().then(() => {
    //Cria a tabela no banco de dados e inicia o servidor.
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);//Crase
        console.log('Banco de dados sicronizado!');
    });

}).catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});
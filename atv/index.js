const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');

//Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela no banco de dados.
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING, //TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false //NOT NULL -> obrigatorio -> NÃO PODE SER NULO
    },
    email: {
        type: DataTypes.STRING, //TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, //NOT NULL -> obrigatorio -> NÃO PODE SER NULO ou vazio
        unique: true //NÃO PODE REPETIR VALORES
    },
});

const app = express();//INICIALIZA O EXPRESS
app.use(cors());// PERMITE QUE API ACEITE CONEXÃO DO FRONT-END.
app.use(express.json()); //HABILITAR O EXPRESS PARA ENTENDER  REQUISIÇÕES COM JSON

const porta = 3000;//PORTA QUE A APLICAÇÃO VAI RODAR

//ROTA DE TESTE
app.get('/', (req, res) => {
    res.send('API Funcionando!');
});

//ROTA PARA LISTAR TODOS OS USUÁRIOS
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});


//Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        const {nome, email} = req.body;
        const novoUsuario = await Usuario.create({nome, email});
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({error: "E-mail já cadastrado."});
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

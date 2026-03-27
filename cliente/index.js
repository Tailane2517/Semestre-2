const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('db_cliente', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela no banco de dados.
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING, //TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false //NOT NULL -> obrigatorio -> NÃO PODE SER NULO
    },
    dataNascimento: {
        type: DataTypes.STRING, //TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, //NOT NULL -> obrigatorio -> NÃO PODE SER NULO ou vazio
        unique: true //NÃO PODE REPETIR VALORES
    },
    protocoloAtendimento: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
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
app.get('/clientes', async (req, res) => {
    const clientes = await Clientes.findAll();
    res.json(clientes);
});


//Rota para criar um novo usuário
app.post('/clientes', async (req, res) => {
    try {
        const {nome, dataNascimento, protocoloAtendimento} = req.body;
        const novoCliente = await Cliente.create({nome, dataNascimento, protocoloAtendimento});
        res.status(201).json(novoCliente);
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
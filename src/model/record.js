const Sequelize = require("sequelize");
const connection = require("../database/database");

const records = connection.define('records', {
    numeroSecretaria:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null,
        unique: true
    }, nome: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null
    }, email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: null,
        unique: true
    }, telefone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: null,
        unique: true
    }, data_cadastro: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: null
    }, data_retorno: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: null,
    }, status: {
        type: Sequelize.STRING,
    }
});

// records.sync({force: false}).then(() => {
//     console.log("Tabela Criada");
// });

module.exports = records;
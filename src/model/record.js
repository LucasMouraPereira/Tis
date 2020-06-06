const Sequelize = require("sequelize");
const connection = require("../database/database");

const records = connection.define('records', {
    numeroSecretaria:{
        type: Sequelize.STRING,
        allowNull: false,
    }, nome: {
        type: Sequelize.STRING,
        allowNull: false,
    }, email: {
        type: Sequelize.STRING,
        allowNull: false,
    }, telefone: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, data_cadastro: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }, data_retorno: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }, status: {
        type: Sequelize.STRING,
    }
});

// records.sync({force: true}).then(() => {
//     console.log("Tabela Criada");
// });

module.exports = records;
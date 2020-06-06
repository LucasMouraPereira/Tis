const Sequelize = require("sequelize");

const connection = new Sequelize('heroku_1eb4d79481fc943', 'b629aed0c63e5a', '43ed9ea7', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;

//b629aed0c63e5a
//43ed9ea7
//us-cdbr-east-05.cleardb.net

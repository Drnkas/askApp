const Sequelize = require('sequelize');

const connection = new Sequelize('ask', 'root','2312',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;
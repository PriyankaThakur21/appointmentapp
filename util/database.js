const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointmentapp', 'root', '218priya', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
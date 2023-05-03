const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
const Band = sequelize.define("band",{
    name: Sequelize.STRING,
    number_Members: Sequelize.INTEGER
})

module.exports = {
    Band
};
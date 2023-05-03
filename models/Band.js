const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
const Band = sequelize.define("band",{
    name: Sequelize.STRING,
    genre: Sequelize.STRING
})
async function main(){
    await sequelize.sync();
    await Band.create({name: "Maroon 5", genre: "Pop"})
}
main();
module.exports = {
    Band
};
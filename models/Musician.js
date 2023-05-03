const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
const Musician = sequelize.define("muscian",{
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
})
async function main(){
    await sequelize.sync();
    await Musician.create({name: "Link", instrument: "Ocarina"})
}
main();
module.exports = {
    Musician
};
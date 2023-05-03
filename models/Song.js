const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
const Song = sequelize.define("song",{
    title: Sequelize.STRING,
    year: Sequelize.INTEGER,
    length: Sequelize.INTEGER,

})
async function main(){
    await sequelize.sync();
    await Song.create({title: "rnadom", year: 2003, length: 1})
}
main();

module.exports = {
    Song
};
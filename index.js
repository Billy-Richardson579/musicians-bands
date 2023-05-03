const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

console.log(Band.create({name: "dan", instrament: "piano"}))

module.exports = {
    Band,
    Musician,
    Song
};

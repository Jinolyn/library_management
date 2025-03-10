const mongoose = require('mongoose');

// change this to your own data to connect to your mongodb
const dbUri = 'mongodb+srv://utilisateur:motdepasse@cluster0.mongodb.net/nom_de_la_base?retryWrites=true&w=majority'


module.exports = ()=> mongoose.connect(dbUri)

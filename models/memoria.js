const mongoose = require("mongoose");

const schema = mongoose.Schema;

const memoriaSchema = new mongoose.Schema({
    nombre : String,
    Imagen : String,
    direccion : String 
}) 

const Memoria = mongoose.model('Memoria', memoriaSchema)

module.exports = Memoria;
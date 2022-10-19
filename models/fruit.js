const mongoose = require('mongoose')

//make schema
//class and constructor
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
})

//make a model from the schema (allows you to do all the CRUD)
const Fruit = mongoose.model('Fruit', fruitSchema)

//export model for use in the app
module.exports = Fruit
const mongoose = require('./../connection')
const Schema =  mongoose.Schema

const exerciseSchema = new Schema({
    name: String,
    type: String,
    description: String,
    reps: Number,
    sets: Number,
    time: Number
})

module.exports = mongoose.model('Exercise', exerciseSchema)
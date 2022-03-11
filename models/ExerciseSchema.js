const mongoose = require('./../connection')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
            name: String,
            description: String,
            reps: Number,
            sets: Number
})

module.exports = exerciseSchema
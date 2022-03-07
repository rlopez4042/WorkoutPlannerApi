//Workout schema code goes here

const mongoose = require('./../connection')
const Schema =  mongoose.Schema

const workoutSchema = new Schema({
    name: String,
    exercises: [{type: Schema.Types.ObjectId, ref:'Exercise'}]

})

module.exports = mongoose.model('Workout', workoutSchema)
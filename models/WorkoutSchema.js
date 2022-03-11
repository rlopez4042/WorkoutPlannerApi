const mongoose = require('./../connection')
const exerciseSchema = require('./ExerciseSchema')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: String,
    duration: String,
    exercises: [
        exerciseSchema
    ]
})

module.exports = mongoose.model("Workout", workoutSchema)
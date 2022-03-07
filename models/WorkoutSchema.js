//const mongoose = require('./../connection')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: String,
    duration: String,
    exercises: [
        {
            name: String,
            description: String,
            reps: Number,
            sets: Number
        }
    ]
})
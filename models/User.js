//User schema code goes here

const mongoose = require('./../connection')
const Schema =  mongoose.Schema

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    age: Number,
    weight: Number,
    myWorkouts: [{type: Schema.Types.ObjectId, ref:'Workout'}]
})

module.exports = mongoose.model('User',userSchema)
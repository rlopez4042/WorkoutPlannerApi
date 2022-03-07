const express = require('express')
const router = express.Router()

const Exercise = require('./../models/Exercise')

router.get("/", async (req, res) => {
    console.log("all exercises route")
    const allExercises = await Exercise.find({})
    res.json({
        status: 200,
        Exercises: allExercises
    })
})
const express = require('express')
const router = express.Router()

const Exercise = require('../models/WorkoutSchema')

router.get("/", async (req, res) => {
    console.log("all workouts route")
    const allWorkouts = await Exercise.find({})
    res.json({
        status: 200,
        Exercises: allWorkouts
    })
})

module.exports = router;
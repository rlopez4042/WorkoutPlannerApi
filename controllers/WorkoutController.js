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

router.post("/", async (req, res) => {
    const data = req.body;
    const newExercise = await Exercise.create(data)
    res.json({
        status: 200,
        msg: 'New Exercises added',
        Excercise: newExercise

    });
});

module.exports = router;
const mongoose = require("./../connection");
const Workout = require("./../models/WorkoutSchema");
const workoutDataSeed = require("./workoutDataSeed");

Workout.deleteMany({}).then(() => {
    Workout.insertMany(workoutDataSeed).then(() => {
        console.log("added workout data");
        console.log(workoutDataSeed);
        process.exit();
    });
});


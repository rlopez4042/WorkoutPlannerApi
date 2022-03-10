const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Workout = require("../models/WorkoutSchema");

router.get("/", async (req, res) => {
  console.log("all workouts route");
  const allWorkouts = await Workout.find({});
  res.json({
    status: 200,
    Workout: allWorkouts,
  });
});

router.get("/:name", (req, res) => {
  Workout.findOne({ name: req.params.name }).then((workout) => {
    res.json({
      status: 200,
      workout: workout,
    });
  });
});

router.get("/id/:id", (req, res) => {
  Workout.findById({ _id: req.params.id }).then((workout) => {
    res.json({
      status: 200,
      workout: workout,
    });
  });
});

router.post("/", async (req, res) => {
  const data = req.body;
  const newWorkout = await Workout.create(data);
  res.json({
    status: 200,
    msg: "New Exercises added",
    Workout: newWorkout,
  });
});

router.put('/:id', (req, res) => {
  Workout.updateOne(
      {
        _id: req.params.id
        }, 
      {
        $push: {exercises: req.body} 
        } 
      )
      .then(exercise => res.status(201).json({ status: 201, exercise: exercise}))
      .catch(error => console.log(error))
})

router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      duration: req.body.duration,
      exercises: req.body.exercises,
    },
    { new: true }
  ).then((workout) =>
    res.json({
      status: 200,
      msg: "workout updated",
      workout: workout,
    })
  );
});

router.delete("/:id", (req, res) => {
  Workout.findByIdAndDelete(req.params.id).then((workout) => {
    res.json({
      status: 200,
      msg: workout,
    });
  });
});

module.exports = router;
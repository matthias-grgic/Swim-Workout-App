import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema({
    any: mongoose.Mixed,
})

const WorkoutList = mongoose.model("GeneratedWorkoutList", workoutSchema)

export default WorkoutList

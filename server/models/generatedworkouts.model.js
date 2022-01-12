import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema({
    name: String,
    type: String,
    equipment: String,
    video: String,
    definition: String,
    length: Number,
})

const WorkoutList = mongoose.model("GeneratedWorkoutList", workoutSchema)

export default WorkoutList

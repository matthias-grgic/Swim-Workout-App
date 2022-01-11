import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema({
    name: String,
    type: String,
    equipment: String,
    video: String,
    definition: String,
})

const WorkoutList = mongoose.model("WorkoutList", workoutSchema)

export default WorkoutList

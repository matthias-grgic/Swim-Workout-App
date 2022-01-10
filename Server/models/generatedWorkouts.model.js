import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema({
    any: [],
})
const WorkoutList = mongoose.model("WorkoutList", workoutSchema)

export default WorkoutList

import mongoose from "mongoose"

const ExerciseListSchema = new mongoose.Schema({
    name: String,
    type: String,
    equipment: String,
    video: String,
    definition: String,
    length: Number,
})
const ExerciseList = mongoose.model("ExerciseList", ExerciseListSchema)

export default ExerciseList

import mongoose from "mongoose"

const testListSchema = new mongoose.Schema({
    name: String,
    type: String,
    equipment: String,
    video: String,
    definition: String,
})
const TestList = mongoose.model("TestList", testListSchema)

export default TestList

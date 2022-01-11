import express from "express"
import { getExerciseList, postExerciseList } from "../controller/ExerciseList.controller.js"
import { getWorkoutList, postWorkoutList, deleteItems } from "../controller/generatedWorkouts.controller.js"

const router = express.Router()

//Test
router.get("/test", (req, res) => {
    res.json({ status: "Running" })
})

//ExerciseList
router.get("/getexerciselist", getExerciseList)
router.post("/postexerciselist", postExerciseList)

//GeneratedWorkoutList
router.get("/getworkoutlist", getWorkoutList)
router.post("/postworkoutlist", postWorkoutList)
router.delete("/deleteworkoutlist", deleteItems)

export default router

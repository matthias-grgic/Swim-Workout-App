import express from "express"
import { getExerciseList, postExerciseList } from "../controller/exerciselist.controller.js"
import { getWorkoutList, postWorkoutList, deleteItems } from "../controller/generatedworkouts.controller.js"
import { getUserExercises, postUserExercises, deleteUserItems } from "../controller/userexercises.controller.js"

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

///UserExercises
router.get("/getUserExercises", getUserExercises)
router.post("/postUserExercises", postUserExercises)
router.delete("/deleteUserExercises/:itemId", deleteUserItems)

export default router

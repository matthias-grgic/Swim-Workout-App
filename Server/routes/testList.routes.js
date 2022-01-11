import express from "express"
//import der angelegten variablen (get, post, etc. ...) für testList
import { getTestList, postTestList } from "../controller/testList.controller.js"
import { getWorkoutList, postWorkoutList, deleteItems } from "../controller/generatedWorkouts.controller.js"

const router = express.Router()

//TestList
router.get("/get", getTestList)
router.post("/post", postTestList)

//WorkoutList
router.get("/getworkoutlist", getWorkoutList)
router.post("/postworkoutlist", postWorkoutList)
router.delete("/deleteworkoutlist", deleteItems)

export default router

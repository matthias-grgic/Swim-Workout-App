import express from "express"
//import der angelegten variablen (get, post, etc. ...) für testList
import { getTestList, postTestList } from "../controller/testList.controller.js"

const router = express.Router()

router.get("/get", getTestList)
router.post("/post", postTestList)

export default router

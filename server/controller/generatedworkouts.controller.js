import WorkoutList from "../models/generatedworkouts.model.js"

//GET//
const getWorkoutList = async (req, res) => {
    const workOutAll = await WorkoutList.find()
    res.json(workOutAll)
}

//POST//
const postWorkoutList = async (req, res) => {
    try {
        const result = await WorkoutList.insertMany({
            name: req.body.name,
            type: req.body.type,
            video: req.body.video,
            equipment: req.body.equipment,
            definition: req.body.definition,
            length: req.body.length,
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

//DELETE//
const deleteItems = async (req, res) => {
    const itemId = req.params._itemId
    try {
        const result = await WorkoutList.findByIdAndDelete(itemId)
        if (result) {
            res.json({ status: "Successfully deleted." })
        } else {
            res.json({ status: "Could not find id / Item." })
        }
    } catch (error) {
        res.json({ status: "Check if something is wrong." })
    }
}

export { getWorkoutList, postWorkoutList, deleteItems }

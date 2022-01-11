import WorkoutList from "../models/generatedWorkouts.model.js"

//GET//
const getWorkoutList = async (req, res) => {
    const workOutAll = await WorkoutList.find()
    res.json(workOutAll)
}

//POST//
const postWorkoutList = async (req, res) => {
    const workoutListAdd = new WorkoutList({
        name: req.body.name,
        type: req.body.type,
        euipment: req.body.euipment,
        video: req.body.video,
        definition: req.body.definition,
        length: req.body.length,
    })
    try {
        const result = await workoutListAdd.save()
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

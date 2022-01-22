import UserExercises from "../models/userexercises.model.js"

//GET//
const getUserExercises = async (req, res) => {
    const workOutAll = await UserExercises.find()
    res.json(workOutAll)
}

//POST//
const postUserExercises = async (req, res) => {
    const UserExercisesAdd = new UserExercises({
        name: req.body.name,
        type: req.body.type,
        video: req.body.video,
        equipment: req.body.equipment,
        definition: req.body.definition,
        length: req.body.length,
    })
    try {
        const result = await UserExercisesAdd.save()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

//DELETE//
const deleteUserItems = async (req, res) => {
    const itemId = req.params._itemId
    try {
        const result = await UserExercises.findByIdAndDelete(itemId)
        if (result) {
            res.json({ status: "Successfully deleted." })
        } else {
            res.json({ status: "Could not find id / Item." })
        }
    } catch (error) {
        res.json({ status: "Check if something is wrong." })
    }
}

export { getUserExercises, postUserExercises, deleteUserItems }

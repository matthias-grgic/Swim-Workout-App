import ExerciseList from "../models/ExerciseList.model.js"

//GET
const getExerciseList = async (req, res) => {
    const testListAll = await ExerciseList.find()
    res.json(testListAll)
}

//POST
const postExerciseList = async (req, res) => {
    const category = new ExerciseList({
        name: req.body.name,
        type: req.body.type,
        equipment: req.body.equipment,
        video: req.body.video,
        definition: req.body.definition,
        length: req.body.length,
    })
    try {
        const result = await category.save()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

export { getExerciseList, postExerciseList }

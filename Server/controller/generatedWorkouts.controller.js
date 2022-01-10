import WorkoutList from "../models/generatedWorkouts.model.js"

//GET
const getWorkoutList = async (req, res) => {
    const workOutAll = await WorkoutList.find()
    res.json(workOutAll)
}

//POST
const postWorkoutList = async (req, res) => {
    const workoutListAdd = new WorkoutList({
        any: [],
    })
    try {
        const result = await workoutListAdd.save()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

export { getWorkoutList, postWorkoutList }

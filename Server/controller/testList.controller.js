import TestList from "../models/testList.model.js"

//GET
const getTestList = async (req, res) => {
    const testListAll = await TestList.find()
    res.json(testListAll)
}

//POST
const postTestList = async (req, res) => {
    const category = new TestList({
        name: req.body.name,
        type: req.body.type,
        equipment: req.body.equipment,
        video: req.body.video,
        definition: req.body.definition,
    })
    try {
        const result = await category.save()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

export { getTestList, postTestList }

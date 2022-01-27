//WORKOUT SECTION PERCENTAGE
const warmUpCalc = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return String((1000 / 1000) * 100)
    } else if (lengthOfWod === 50) {
        return String((2000 / 1000) * 100)
    }
    {
        return String((3000 / 1000) * 100)
    }
}

const drillCalc = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return String((1000 / 1000) * 200)
    } else if (lengthOfWod === 50) {
        return String((2000 / 1000) * 200)
    }
    {
        return String((3000 / 1000) * 200)
    }
}

const mainCalc = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return String((1000 / 1000) * 600)
    } else if (lengthOfWod === 50) {
        return String((2000 / 1000) * 600)
    }
    {
        return String((3000 / 1000) * 600)
    }
}

const coolDownCalc = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return String((1000 / 1000) * 100)
    } else if (lengthOfWod === 50) {
        return String((2000 / 1000) * 100)
    }
    {
        return String((3000 / 1000) * 100)
    }
}

//SWIM DISTANCE
const workOutDistance = (lengthOfWod) => {
    if (lengthOfWod === 50) {
        return "2000 m"
    } else if (lengthOfWod === 100) {
        return "3000 m"
    } else {
        return "1000 m"
    }
}

//POOL LENGTH
const poolLength = (switchOne) => {
    if (switchOne === false) {
        return "50 m"
    }
    {
        return "25 m"
    }
}

//DRILLS CHECK
const checkDrills = (switchTwo) => {
    if (switchTwo === false) {
        return "hide"
    }
    {
        return "show"
    }
}

//Amount of Exercise per Section
const exerciseAmount = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return 2
    } else if (lengthOfWod === 50) {
        return 4
    }
    {
        return 6
    }
}

export { coolDownCalc, drillCalc, mainCalc, warmUpCalc, checkDrills, poolLength, workOutDistance, exerciseAmount }

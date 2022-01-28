//WORKOUT SECTION PERCENTAGE
const warmDrillCoolCalc = (lengthOfWod, percentage) => {
    if (lengthOfWod === 0) {
        return String((1000 / 1000) * percentage)
    } else if (lengthOfWod === 50) {
        return String((2000 / 1000) * percentage)
    }
    {
        return String((3000 / 1000) * percentage)
    }
}

//MAIN SECTION PERCENTAGE, check if DRILL ARE ON/OFF
const mainCalc = (lengthOfWod, switchTwo) => {
    if (lengthOfWod === 0 && switchTwo === false) {
        return String((1000 / 1000) * 800)
    } else if (lengthOfWod === 50 && switchTwo === false) {
        return String((2000 / 1000) * 800)
    } else if (lengthOfWod === 100 && switchTwo === false) {
        return String((3000 / 1000) * 800)
    } else if (lengthOfWod === 0 && switchTwo === true) {
        return String((1000 / 1000) * 600)
    } else if (lengthOfWod === 50 && switchTwo === true) {
        return String((2000 / 1000) * 600)
    } else if (lengthOfWod === 100 && switchTwo === true) {
        return String((3000 / 1000) * 600)
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

//Amount of Exercises DRILL
const exerciseAmountDrills = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return 2
    } else if (lengthOfWod === 50) {
        return 4
    }
    {
        return 6
    }
}

//Amount of Exercises MAIN
const exerciseAmountMain = (lengthOfWod, switchTwo) => {
    if (lengthOfWod === 0 && switchTwo === true) {
        return 2
    } else if (lengthOfWod === 50 && switchTwo === true) {
        return 4
    } else if (switchTwo === true) {
        return 6
    } else if (lengthOfWod === 0 && switchTwo === false) {
        return 4
    } else if (lengthOfWod === 50 && switchTwo === false) {
        return 6
    } else if (switchTwo === false) {
        return 8
    }
}

// Number of Warm Upp and Cool Down laps
const warmAndCoolLaps = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return "1"
    } else if (lengthOfWod === 50) {
        return "2"
    }
    {
        return "3"
    }
}

// IF POOL LENGTH 50M, double exercise length and half the amount
const doubleLap = (switchOne, length) => {
    if (switchOne === false) {
        return String(length * 2)
    }
    {
        return length
    }
}

const halfAmount = (switchOne, amount) => {
    if (switchOne === false) {
        return String(amount / 2)
    }
    {
        return amount
    }
}

const setTimerLength = (lengthOfWod) => {
    if (lengthOfWod === 0) {
        return "00:30h"
    } else if (lengthOfWod === 50) {
        return "01:00h"
    }
    {
        return "01:30h"
    }
}

export { mainCalc, warmDrillCoolCalc, checkDrills, poolLength, workOutDistance, exerciseAmountDrills, exerciseAmountMain, warmAndCoolLaps, doubleLap, halfAmount, setTimerLength }

import styled from "styled-components"
import { doubleLap, halfAmount } from "../lib/workoutCalc"
import FinsImg from "../images/equipment/fins.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"

export default function MapCurrentWod({ main, switchOne, switchTwo, lengthOfWod }) {
    const typeLengthCheck = (type, length) => {
        if (type === "drill") {
            return halfAmount(switchOne, 4) + " x " + doubleLap(switchOne, length) + "m"
        }
        {
            return "3" + " x " + `100m`
        }
    }

    return main.map((item, index, arr) => {
        if (arr.length - 1 === index && switchTwo === false && lengthOfWod === 0) {
            return (
                <ExerciseCards onClick={() => navigate(`/ExerciseList#${item.id}`)} key={index}>
                    <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                    <IMGDiv value={item.equipment} />
                    <>1 x</>
                    <p>100m</p>
                </ExerciseCards>
            )
        } else if (arr.length - 2 === index && switchTwo === false && lengthOfWod === 50) {
            return (
                <ExerciseCards onClick={() => navigate(`/ExerciseList#${item.id}`)} key={index}>
                    <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                    <IMGDiv value={item.equipment} />
                    <>1 x</>
                    <p>100m</p>
                </ExerciseCards>
            )
        }
        {
            return (
                <ExerciseCards onClick={() => navigate(`/ExerciseList#${item.id}`)} key={index}>
                    <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                    <IMGDiv value={item.equipment} />
                    <>{typeLengthCheck(item.type, item.length)}</>
                </ExerciseCards>
            )
        }
    })
}

const ExerciseCards = styled.div`
    border-bottom: ${(props) => (props.noBorder ? "0px solid var(--border-seperator)" : "1px solid var(--border-seperator);")};
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 10px;
`

const ExerciseCardsTitle = styled.div`
    flex: 1;
`

const ExerciseCardsWarmUp = styled(ExerciseCards)`
    padding: 0px 10px;
`

const IMGDiv = styled.div`
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 50px;
`

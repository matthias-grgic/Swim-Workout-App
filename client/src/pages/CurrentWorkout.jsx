import Clock from "../images/clock.svg"
import { mainCalc, warmDrillCoolCalc, checkDrills, poolLength, workOutDistance, exerciseAmountDrills, exerciseAmountMain, warmAndCoolLaps } from "../lib/workoutCalc"
import ButtonSection from "../components/ButtonGroup"
import FinsImg from "../images/equipment/fins.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import minilogo from "../images/minilogo.svg"
import PoolDistance from "../images/pooldistance.svg"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import styled from "styled-components"
import SnorkelImg from "../images/equipment/snorkel.svg"
import { useEffect, useState } from "react"

function CurrentWorkout({ wodList, lengthOfWod, switchOne, switchTwo }) {
    const [drills, setDrills] = useState([])
    const [main, setMain] = useState([])
    const [currentWOD, setCurrentWOD] = useState([])

    // console.log(exerciseAmountMain(lengthOfWod, switchTwo))
    // console.log(switchTwo)

    //SLICE AND RANDOMIZE EXERCISES
    useEffect(async () => {
        const drillsRandom = await wodList.filter((word) => word.type === "drill").slice(0, exerciseAmountDrills(lengthOfWod))
        const mainRandom = await wodList.filter((word) => word.type === "main").slice(0, exerciseAmountMain(lengthOfWod, switchTwo))
        return setDrills(drillsRandom), setMain(mainRandom), setCurrentWOD(drillsRandom.concat(mainRandom))
    }, [])

    return (
        <Cards>
            <Title>
                <h2>WORKOUT</h2>
            </Title>
            <InfoBar>
                <Infos>
                    <img src={minilogo} width="45px" />
                    <InfoText>{workOutDistance(lengthOfWod)}</InfoText>
                </Infos>
                <Infos>
                    <img src={Clock} width="45px" />
                    <InfoText>1:00h</InfoText>
                </Infos>
                <Infos>
                    <img src={PoolDistance} width="45px" />
                    <InfoText>{poolLength(switchOne)}</InfoText>
                </Infos>
            </InfoBar>
            <ButtonSection currentWOD={currentWOD} />
            <WorkoutDiv>
                <TitleExercise>
                    <h3>WARM UP</h3>
                    <div>{warmDrillCoolCalc(lengthOfWod, 100)}m</div>
                </TitleExercise>
                <WarmUp>
                    <ExerciseCardsWarmUp noBorder>
                        <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
                        <PlaceholderIMG />
                        <p>{warmAndCoolLaps(lengthOfWod)} x </p>
                        <p>100m</p>
                    </ExerciseCardsWarmUp>
                </WarmUp>
                <ShowDrills current={checkDrills(switchTwo)}>
                    <TitleExercise>
                        <h3>DRILLS</h3>
                        <div>{warmDrillCoolCalc(lengthOfWod, 200)}m</div>
                    </TitleExercise>
                    <Drills noBorder>
                        {drills.map((item, index) => (
                            <ExerciseCards key={index}>
                                <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                                <IMGDiv value={item.equipment} />
                                <AmountOfLaps>4 x</AmountOfLaps>
                                <p>{item.length}m</p>
                            </ExerciseCards>
                        ))}
                    </Drills>
                </ShowDrills>
                <TitleExercise>
                    <h3>MAIN</h3>
                    <div>{mainCalc(lengthOfWod, switchTwo)}m</div>
                </TitleExercise>
                <Main noBorder>
                    {main.map((item, index) => (
                        <ExerciseCards key={index}>
                            <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                            <IMGDiv value={item.equipment} />
                            <AmountOfLaps>3 x</AmountOfLaps>
                            <p>100m</p>
                        </ExerciseCards>
                    ))}
                </Main>
                <TitleExercise>
                    <h3>COOL DOWN</h3>
                    <div>{warmDrillCoolCalc(lengthOfWod, 100)}m</div>
                </TitleExercise>
                <CoolDown>
                    <ExerciseCardsCoolDown noBorder>
                        <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
                        <PlaceholderIMG />
                        <p>{warmAndCoolLaps(lengthOfWod)} x </p>
                        <p>100m</p>
                    </ExerciseCardsCoolDown>
                </CoolDown>
            </WorkoutDiv>
        </Cards>
    )
}

export default CurrentWorkout

const AmountOfLaps = styled.div``

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 1px;
    height: 100vh;
    margin-bottom: 55px;
    padding: 10px;
    overflow: auto;
    width: 100%;
    h3 {
        padding: 8px 16px;
    }
`
const CoolDown = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: ${(props) => (props.primary ? "1px solid var(--border-seperator" : null)};
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    padding: 10px 16px 16px 16px;
`

const Drills = styled(CoolDown)``

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

const ExerciseCardsCoolDown = styled(ExerciseCardsWarmUp)`
    padding: 0px 10px;
`

const IMGDiv = styled.div`
    background-position: left;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 40px;
`

const Infos = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 16px;
`

const InfoBar = styled.div`
    /* background-color: rgba(255, 255, 255, 0.2); */
    display: flex;
    justify-content: space-around;
    padding: 0px 16px 0px 16px;
    gap: 15px;
`

const InfoText = styled.div`
    font-weight: bold;
    margin-top: 5px;
`

const Main = styled(CoolDown)``

const PlaceholderIMG = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    flex: 0 0 50px;
`

const ShowDrills = styled.div`
    display: ${(props) => (props.current === "show" ? "block" : "none")};
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 16px 16px 16px;
`

const TitleExercise = styled.div`
    color: var(--disabled-txt-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const WarmUp = styled(CoolDown)``

const WorkoutDiv = styled.div`
    display: flex;
    flex-direction: column;
`

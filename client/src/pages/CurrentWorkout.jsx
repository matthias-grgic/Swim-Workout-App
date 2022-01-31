import Clock from "../images/clock.svg"
import { mainCalc, warmDrillCoolCalc, checkDrills, poolLength, workOutDistance, exerciseAmountDrills, exerciseAmountMain, warmAndCoolLaps, setTimerLength } from "../lib/workoutCalc"
import minilogo from "../images/minilogo.svg"
import PoolDistance from "../images/pooldistance.svg"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MapWorkout from "../components/MapWorkout"

function CurrentWorkout({ wodList, lengthOfWod, switchOne, switchTwo, setExpandedAccordion }) {
    const [drills, setDrills] = useState([])
    const [main, setMain] = useState([])

    const navigate = useNavigate()

    //SLICE AND RANDOMIZE EXERCISES
    useEffect(async () => {
        const drillsRandom = await wodList.filter((word) => word.type === "drill").slice(0, exerciseAmountDrills(lengthOfWod))
        const mainRandom = await wodList.filter((word) => word.type === "main").slice(0, exerciseAmountMain(lengthOfWod, switchTwo))
        return setDrills(drillsRandom), setMain(mainRandom)
    }, [])

    const handleClick = () => {
        setExpandedAccordion(id)
        navigate("/ExerciseList")
    }

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
                    <InfoText>{setTimerLength(lengthOfWod)}</InfoText>
                </Infos>
                <Infos>
                    <img src={PoolDistance} width="45px" />
                    <InfoText>{poolLength(switchOne)}</InfoText>
                </Infos>
            </InfoBar>
            <WorkoutDiv>
                <TitleExercise>
                    <h3>WARM UP</h3>
                    <div>{warmDrillCoolCalc(lengthOfWod, 100)}m</div>
                </TitleExercise>
                <WarmUp>
                    <ExerciseCardsWarmUp noBorder>
                        <ExerciseCardsTitle onClick={handleClick}>Freestyle</ExerciseCardsTitle>
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
                    <Drills onClick={() => navigate("/ExerciseList")} noBorder>
                        <MapWorkout main={drills} lengthOfWod={lengthOfWod} switchTwo={switchTwo} switchOne={switchOne} />
                    </Drills>
                </ShowDrills>
                <TitleExercise>
                    <h3>MAIN</h3>
                    <div>{mainCalc(lengthOfWod, switchTwo)}m</div>
                </TitleExercise>
                <Main onClick={() => navigate("/ExerciseList")} noBorder>
                    <MapWorkout main={main} lengthOfWod={lengthOfWod} switchTwo={switchTwo} switchOne={switchOne} />
                </Main>
                <TitleExercise>
                    <h3>COOL DOWN</h3>
                    <div>{warmDrillCoolCalc(lengthOfWod, 100)}m</div>
                </TitleExercise>
                <CoolDown>
                    <ExerciseCardsCoolDown noBorder>
                        <ExerciseCardsTitle onClick={() => navigate("/ExerciseList")}>Freestyle</ExerciseCardsTitle>
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

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 0px;
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

const Infos = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 16px;
`

const InfoBar = styled.div`
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

import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import PoolDistance from "../images/pooldistance.svg"
import Clock from "../images/clock.svg"
import minilogo from "../images/minilogo.svg"
import { useEffect, useState } from "react"
import postToAPI from "../lib/postToApi"

function CurrentWorkout({ wodList, lengthOfWod, switchOne }) {
    const [drills, setDrills] = useState([])
    const [main, setMain] = useState([])
    const [currentWOD, setCurrentWOD] = useState([])

    //SLICE AND RANDOMIZE EXERCISES
    useEffect(async () => {
        const drillsRandom = await wodList.filter((word) => word.type === "drill").slice(0, Math.floor(Math.random() * (4 - 2) + 2))
        const mainRandom = await wodList.filter((word) => word.type === "main").slice(0, Math.floor(Math.random() * (6 - 3) + 3))
        return setDrills(drillsRandom), setMain(mainRandom), setCurrentWOD(drillsRandom.concat(mainRandom))
    }, [])

    //SHOW LENGTH AND TIME OF WORKOUT
    const workOutDistance = (lengthOfWod) => {
        if (lengthOfWod === 50) {
            return "2000 m"
        } else if (lengthOfWod === 100) {
            return "3000 m"
        } else {
            return "1000 m"
        }
    }

    const poolLength = (switchOne) => {
        if (switchOne === "") {
            return "25 m"
        }
        {
            return "50 m"
        }
    }

    //SAVE WORKOUT TO FAVOURITES
    const saveWorkout = async (e) => {
        e.preventDefault()
        await postToAPI("/api/postworkoutlist", currentWOD)
    }

    console.log(currentWOD)

    return (
        <Cards>
            <Title>
                <h2>WORKOUT</h2>
                <ButtonSection>
                    <ButtonSave onClick={saveWorkout}>
                        <svg width="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18,7 L20.5,7 C20.7761424,7 21,7.22385763 21,7.5 C21,7.77614237 20.7761424,8 20.5,8 L18,8 L18,10.5 C18,10.7761424 17.7761424,11 17.5,11 C17.2238576,11 17,10.7761424 17,10.5 L17,8 L14.5,8 C14.2238576,8 14,7.77614237 14,7.5 C14,7.22385763 14.2238576,7 14.5,7 L17,7 L17,4.5 C17,4.22385763 17.2238576,4 17.5,4 C17.7761424,4 18,4.22385763 18,4.5 L18,7 Z M11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 L3.5,8 C3.22385763,8 3,7.77614237 3,7.5 C3,7.22385763 3.22385763,7 3.5,7 L11.5,7 Z M14.5,12 C14.7761424,12 15,12.2238576 15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L3.5,13 C3.22385763,13 3,12.7761424 3,12.5 C3,12.2238576 3.22385763,12 3.5,12 L14.5,12 Z M20.5,17 C20.7761424,17 21,17.2238576 21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L3.5,18 C3.22385763,18 3,17.7761424 3,17.5 C3,17.2238576 3.22385763,17 3.5,17 L20.5,17 Z" />
                        </svg>
                    </ButtonSave>
                    <ReloadButton>
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M482.195 226.196C482.195 101.471 380.725 0 256.001 0S29.805 101.471 29.805 226.196c0 7.409 6.007 13.416 13.416 13.416s13.416-6.008 13.416-13.416c0-109.93 89.434-199.363 199.363-199.363s199.363 89.434 199.363 199.363c0 109.928-89.434 199.362-199.363 199.362h-23.276l33.282-37.255c4.937-5.525 4.458-14.007-1.067-18.944-5.525-4.937-14.008-4.457-18.944 1.068l-47.576 53.255c-7.788 8.718-7.788 21.866 0 30.584l47.576 53.255c2.651 2.968 6.322 4.478 10.01 4.478 3.181 0 6.375-1.126 8.934-3.41 5.526-4.937 6.004-13.419 1.067-18.944l-33.282-37.255H256c124.725 0 226.195-101.471 226.195-226.194z" />
                        </svg>
                    </ReloadButton>
                </ButtonSection>
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
            <WorkoutDiv>
                <WarmUpTitle>
                    <h3>WARM UP</h3>
                </WarmUpTitle>
                <WarmUp>
                    <ExerciseCardsWarmUp noBorder>
                        <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
                        <p>2 x </p>
                        <p>100m</p>
                        <PlaceholderIMG />
                    </ExerciseCardsWarmUp>
                </WarmUp>
                <h3>DRILLS</h3>
                <Drills noBorder>
                    {drills.map((item, index) => (
                        <ExerciseCards key={index}>
                            <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                            <AmountOfLaps>4 x</AmountOfLaps>
                            <p>{item.length}m</p>
                            <IMGDiv value={item.equipment} />
                        </ExerciseCards>
                    ))}
                </Drills>
                <h3>MAIN</h3>
                <Main noBorder>
                    {main.map((item, index) => (
                        <ExerciseCards key={index}>
                            <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                            <AmountOfLaps>4 x</AmountOfLaps>
                            <p>{item.length}m</p>
                            <IMGDiv value={item.equipment} />
                        </ExerciseCards>
                    ))}
                </Main>
                <h3>COOL DOWN</h3>
                <CoolDown>
                    <ExerciseCardsCoolDown noBorder>
                        <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
                        <p>2 x </p>
                        <p>100m</p>
                        <PlaceholderIMG />
                    </ExerciseCardsCoolDown>
                </CoolDown>
            </WorkoutDiv>
        </Cards>
    )
}

export default CurrentWorkout

const AmountOfLaps = styled.div``

const ButtonSave = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;

    :hover {
        fill: #8b8bd3;
        stroke: 22px;
    }

    :active {
        fill: #5555f8;
    }
`
const ReloadButton = styled(ButtonSave)``

const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

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
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 50px;
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
    margin-top: 5px;
`

const Main = styled(CoolDown)``

const PlaceholderIMG = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    flex: 0 0 50px;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 16px 16px 16px;
`

const WarmUp = styled(CoolDown)``

const WarmUpTitle = styled.div`
    display: flex;
    flex-direction: row;
`

const WorkoutDiv = styled.div`
    display: flex;
    flex-direction: column;
`

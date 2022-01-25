import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import PoolDistance from "../images/pooldistance.svg"
import Clock from "../images/clock.svg"
import minilogo from "../images/minilogo.svg"

function CurrentWorkout({ wodList, lengthOfWod, switchOne, n }) {
    const drills = wodList
        .filter((word) => word.type === "drill")
        .map((item, index) => (
            <ExerciseCards key={index}>
                <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                <AmountOfLaps>4 x</AmountOfLaps>
                <p>{item.length}m</p>
                <IMGDiv value={item.equipment} />
            </ExerciseCards>
        ))
        .slice(0, Math.floor(Math.random() * (4 - 2) + 2))

    const main = wodList
        .filter((word) => word.type === "main")
        .map((item, index) => (
            <ExerciseCards key={index}>
                <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
                <AmountOfLaps>4 x</AmountOfLaps>
                <p>{item.length}m</p>
                <IMGDiv value={item.equipment} />
            </ExerciseCards>
        ))
        .slice(0, Math.floor(Math.random() * (6 - 3) + 3))

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

    return (
        <Cards>
            <Title>
                <h2>WORKOUT</h2>
            </Title>
            <InfoBar>
                <Infos>
                    <img src={PoolDistance} width="45px" />
                    <InfoText>{poolLength(switchOne)}</InfoText>
                </Infos>
                <Infos>
                    <img src={Clock} width="45px" />
                    <InfoText>1:00h</InfoText>
                </Infos>
                <Infos>
                    <img src={minilogo} width="45px" />
                    <InfoText>{workOutDistance(lengthOfWod)}</InfoText>
                </Infos>
            </InfoBar>
            <WorkoutDiv>
                <WarmUpTitle>
                    <h3>WARM UP</h3>
                </WarmUpTitle>
                <WarmUp>
                    <ExerciseCardsWarmUp noBorder>
                        <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
                        <p>2x </p>
                        <p>100m</p>
                        <PlaceholderIMG />
                    </ExerciseCardsWarmUp>
                </WarmUp>
                <h3>DRILLS</h3>
                <Drills noBorder>{drills}</Drills>
                <h3>MAIN</h3>
                <Main noBorder>{main}</Main>
                <h3>COOL DOWN</h3>
                <CoolDown>
                    <ExerciseCardsCoolDown noBorder>
                        <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
                        <p>2x </p>
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

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 1px;
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

const Infos = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 16px;
`

const InfoText = styled.div`
    margin-top: 5px;
`

const InfoBar = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-around;
    padding: 0px 16px 0px 16px;
    gap: 15px;
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

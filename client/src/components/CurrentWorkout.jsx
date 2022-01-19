import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import PoolDistance from "../images/pooldistance.svg"
import Clock from "../images/clock.svg"

function CurrentWorkout({ transferedWodList }) {
    const drills = transferedWodList.map((item, index) => (
        <ExerciseCards key={index}>
            <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
            <p>{item.length}m</p>
            <IMGDiv value={item.equipment} />
        </ExerciseCards>
    ))

    const main = transferedWodList.map((item, index) => (
        <ExerciseCards key={index}>
            <ExerciseCardsTitle>{item.name}</ExerciseCardsTitle>
            <p>{item.length}m</p>
            <IMGDiv value={item.equipment} />
        </ExerciseCards>
    ))

    return (
        <Cards>
            <Title>
                <h2>Current Workout</h2>
            </Title>
            <InfoBar>
                <Infos>
                    <img src={PoolDistance} width="45px" />
                    <p>2000m</p>
                </Infos>
                <Infos>
                    <img src={Clock} width="45px" />
                    <p>1:00h</p>
                </Infos>
            </InfoBar>
            <WarmUp>
                <h3>WARM UP</h3>
                <ExerciseCards noBorder>Freestyle</ExerciseCards>
            </WarmUp>
            <Drills>
                <h3>DRILLS</h3>
                {drills}
            </Drills>
            <Main>
                <h3>MAIN</h3>
                {main}
            </Main>
            <CoolDown>
                <h3>COOL DOWN</h3>
                <ExerciseCards noBorder>Freestyle</ExerciseCards>
            </CoolDown>
        </Cards>
    )
}

export default CurrentWorkout

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 50px;
    padding: 10px;
    overflow: auto;
    width: 100%;
`
const CoolDown = styled.div`
    border-bottom: ${(props) => (props.primary ? "1px solid var(--border-seperator" : null)};
    display: flex;
    flex-direction: column;
    padding: 16px;
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

const IMGDiv = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 60px;
`
const Main = styled(CoolDown)``

const WarmUp = styled(CoolDown)``

const Title = styled(CoolDown)`
    align-items: center;
    padding: 10px 16px 16px 16px;
`

const Infos = styled(CoolDown)`
    align-items: center;
`

const InfoBar = styled.div`
    align-items: center;
    display: flex;
    padding: 0px 16px 16px 16px;
`

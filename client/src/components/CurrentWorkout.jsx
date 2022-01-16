import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"

function CurrentWorkout({ transferedWodList }) {
    const drills = transferedWodList.map((item, index) => (
        <ExerciseCards key={index}>
            <h4>{item.name}</h4>
            <p>{item.length}m</p>
            <IMGDiv value={item.equipment} />
        </ExerciseCards>
    ))

    const main = transferedWodList.map((item, index) => (
        <ExerciseCards key={index}>
            <h3>{item.name}</h3>
            <p>{item.length}m</p>
            <IMGDiv value={item.equipment} />
        </ExerciseCards>
    ))

    return (
        <Cards>
            <WarmUp>
                <h2>WARM UP</h2>
                <ExerciseCards noBorder>Freestyle</ExerciseCards>
            </WarmUp>
            <Drills>
                <h2>DRILLS</h2>
                {drills}
            </Drills>
            <Main>
                <h2>MAIN</h2>
                {main}
            </Main>
            <CoolDown>
                <h2>COOL DOWN</h2>
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
    padding: 10px;
    overflow: auto;
    width: 100%;
`

const ExerciseCards = styled.div`
    border-bottom: ${(props) => (props.noBorder ? "0px solid var(--border-seperator)" : "1px solid var(--border-seperator);")};
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 10px;
`

const IMGDiv = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 60px;
`

const CoolDown = styled.div`
    border-bottom: ${(props) => (props.primary ? "1px solid var(--border-seperator" : null)};
    display: flex;
    flex-direction: column;
    padding: 15px;
`
const Drills = styled(CoolDown)``
const Main = styled(CoolDown)``
const WarmUp = styled(CoolDown)``

import styled from "styled-components"
import minilogo from "../images/minilogo.svg"
import Clock from "../images/clock.svg"
import PoolDistance from "../images/pooldistance.svg"
import { poolLength, workOutDistance, setTimerLength } from "../lib/workoutCalc"

export default function InfoBar({ lengthOfWod, switchOne }) {
    return (
        <InfoBarStyled>
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
        </InfoBarStyled>
    )
}

const InfoBarStyled = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0px 16px 0px 16px;
    gap: 15px;
`

const Infos = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 16px;
`

const InfoText = styled.div`
    font-weight: bold;
    margin-top: 5px;
`

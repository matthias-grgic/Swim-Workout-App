import styled from "styled-components"
import ExerciseList from "./ExerciseList"

function MainRender({ transferedList }) {
    function newWOD(originArray, start, end, factor) {
        const result = originArray.slice(start, end)
        return result
    }

    return (
        <MainDiv>
            <RenderButton onClick={() => console.log(newWOD(transferedList))}>GO</RenderButton>
            <Slider type="range"></Slider>
            <MiniLogo src="src/images/minilogo.svg" alt="swimmer-logo" />
            <ToggleDiv>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
            </ToggleDiv>
        </MainDiv>
    )
}

export default MainRender

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const RenderButton = styled.button`
    font-size: 2.5rem;
    font-family: "Righteous", Arial;
    background: white;
    padding: 0.25em 1em;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    transition: all 0.1s ease-in-out;
    margin-top: 15px;
    &:active {
        background: rgb(235, 235, 235, 0.5);
        color: #acd6fc;
    }
`

const MiniLogo = styled.img``

const Slider = styled.input``

const ToggleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
`

const ToggleSwitch = styled.input``

import styled from "styled-components"

function MainRender() {
    return (
        <MainDiv>
            <RenderButton>GO</RenderButton>
            <Slider type="range"></Slider>
            <MiniLogo src="src/images/minilogo.svg" alt="swimmer-logo" />
            <ToggleDiv>
                <ToggleSwitch type="checkbox" defaultValue="@probablyup"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
            </ToggleDiv>
        </MainDiv>
    )
}

export default MainRender

const RenderButton = styled.button`
    font-size: 1em;
    font-family: "Righteous", Arial;
    background: white;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    &:hover {
        background: #ffd5d5;
    }
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MiniLogo = styled.img``

const Slider = styled.input`
    width: 100%;
`

const ToggleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
`

const ToggleSwitch = styled.input``

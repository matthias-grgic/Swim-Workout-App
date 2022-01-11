import styled from "styled-components"
import { Link } from "react-router-dom"

function MainRender({ transferedList }) {
    const newWOD = (originArray, start, end) => originArray.slice(start, end)
    //SLICE and Convert ARRAY froM API to Object (hier später alle Filter setzen oder?)
    const testListArray = newWOD(transferedList, -1)
    const newObj = Object.assign(
        {},
        ...testListArray.map((item) => ({
            name: item.name,
            type: item.type,
            video: item.video,
            definition: item.definition,
        }))
    )

    //POST DATA TO API
    const postToAPI = async () => {
        try {
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newObj),
            }
            const fetchResponse = await fetch("http://localhost:4000/postworkoutlist", settings)
            const data = await fetchResponse.json()
            return data
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainDiv>
            <Link to="/CurrentWorkout">
                <RenderButton onClick={() => postToAPI()}>GO</RenderButton>{" "}
            </Link>
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

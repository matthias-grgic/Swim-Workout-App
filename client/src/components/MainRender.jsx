import styled from "styled-components"
import { Link } from "react-router-dom"
import SwitchLabels from "../lib/Switch"
import DiscreteSliderMarks from "../lib/RangeSlider"

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
            equipment: item.equipment,
            length: item.length,
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
            const fetchResponse = await fetch("/api/postworkoutlist", settings)
            const data = await fetchResponse.json()
            return data
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainDiv>
            <Link to="/CurrentWorkout">
                <ButtonForRender onClick={() => postToAPI()}>GO</ButtonForRender>{" "}
            </Link>
            {/* <Slider type="range"></Slider> */}
            <DiscreteSliderMarks />
            <ToggleDiv>
                <SwitchLabels></SwitchLabels>
                <ToggleSwitch type="checkbox" label="hi"></ToggleSwitch>
            </ToggleDiv>
        </MainDiv>
    )
}

export default MainRender

const ButtonForRender = styled.button`
    color: white;
    font-size: 2.5rem;
    font-family: "Righteous", Arial;
    cursor: pointer;
    padding: 0.25em 1em;
    border-radius: 50%;
    border: none;
    width: 225px;
    height: 225px;
    transition: all 0.1s ease-in-out;
    margin-top: 15px;
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
    &:active {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        color: white;
    }
    &:hover {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        transition: all 1s ease;
        color: white;
    }
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const Slider = styled.input`
    cursor: pointer;
    width: 90%;
    padding: 5px;
`

const ToggleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 0px;
`

const ToggleSwitch = styled.input``

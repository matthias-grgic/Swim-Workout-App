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
            <DiscreteSliderMarks />
            <ToggleDiv>
                <SwitchLabels></SwitchLabels>
            </ToggleDiv>
        </MainDiv>
    )
}

export default MainRender

const ButtonForRender = styled.button`
    border: none;
    border-radius: 50%;
    box-shadow: var(--main-box-shadow);
    color: white;
    cursor: pointer;
    font-size: 2.5rem;
    font-family: "Righteous", Arial;
    height: 200px;
    margin-top: 15px;
    padding: 0.25em 1em;
    width: 200px;
    transition: all 0.1s ease-in-out;
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
    gap: 1rem;
`

const ToggleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 0px;
`

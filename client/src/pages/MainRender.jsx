import styled from "styled-components"
import { Link } from "react-router-dom"
import SwitchLabels from "../components/Switch"
import DiscreteSliderMarks from "../components/RangeSlider"
import LottieLogoTwo from "../components/lottieanimation"
import { useState } from "react"
import postToAPI from "../lib/postToApi"

function MainRender({ transferedList }) {
    const [isLoading, setLoading] = useState(false)
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

    return (
        <MainDiv>
            <Link to="/CurrentWorkout">
                {/* {isLoading ? <LottieLogoTwo /> : null}  && setLoading(true) */}
                <ButtonForRender onClick={() => postToAPI("/api/postworkoutlist", newObj)}>GO</ButtonForRender>
            </Link>
            <DiscreteSliderMarks />
            <SwitchSection>
                <SwitchLabels></SwitchLabels>
            </SwitchSection>
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
    font-size: 2.8rem;
    font-family: "Righteous", Arial;
    height: 200px;
    margin-top: 15px;
    padding: 0.25em 1em;
    position: relative;
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

const SwitchSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 0px;
`

const LottieFile = styled.div``

import ButtonForRender from "../components/ButtonGenerate"
import styled from "styled-components"
import Switch from "../components/Switch"
import RangeSlider from "../components/RangeSlider"
import BasicPopover from "../components/Popover"

function MainRender({ list, setWodList, setLengthOfWod, setSwitchOne, setSwitchTwo, switchOne, switchTwo }) {
    const newWOD = list
        .map((value) => ({ value, sort: Math.random() })) //put each element in the array in an object, and give it a random sort key
        .sort((a, b) => a.sort - b.sort) //sort using the random key
        .map(({ value }) => value) //unmap to get the original objects

    return (
        <MainDiv>
            <ButtonForRender setWodList={setWodList} setState={newWOD} />
            <RangeSlider setLengthOfWod={setLengthOfWod} />
            <SwitchSection>
                <Switch setSwitchOne={setSwitchOne} setSwitchTwo={setSwitchTwo} switchOne={switchOne} switchTwo={switchTwo} />
            </SwitchSection>
            <BasicPopover />
        </MainDiv>
    )
}

export default MainRender

const LottieFile = styled.div``

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
`

// const newObj = Object.assign(
//     {},
//     ...newWOD.map((item) => ({
//         name: item.name,
//         type: item.type,
//         video: item.video,
//         definition: item.definition,
//         equipment: item.equipment,
//         length: item.length,
//     }))
// )

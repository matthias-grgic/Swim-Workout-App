import ButtonForRender from "../components/ButtonForRender"
import styled from "styled-components"
import Switch from "../components/Switch"
import RangeSlider from "../components/RangeSlider"
import Randomizer from "../lib/Randomizer"

function MainRender({ list, setWodList, lengthOfWod, setLengthOfWod, setSwitchOne, setSwitchTwo, switchOne, switchTwo, switchThree, setSwitchThree, userList }) {
    const checkWhichList = (switchThree) => (switchThree === false ? list : list.concat(userList))
    const randomizedList = Randomizer(checkWhichList(switchThree))
    console.log(lengthOfWod)
    return (
        <MainDiv>
            <ButtonForRender setWodList={setWodList} setState={randomizedList} />
            <RangeSlider setLengthOfWod={setLengthOfWod} lengthOfWod={lengthOfWod} />
            <SwitchSection>
                <Switch setSwitchOne={setSwitchOne} setSwitchTwo={setSwitchTwo} switchOne={switchOne} switchTwo={switchTwo} switchThree={switchThree} setSwitchThree={setSwitchThree} />
            </SwitchSection>
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
    height: 100vh;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`

const SwitchSection = styled.div`
    display: flex;
    flex-direction: column;
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

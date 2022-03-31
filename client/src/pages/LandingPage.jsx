import ButtonForRender from '../components/ButtonForRender'
import styled from 'styled-components'
import Switch from '../components/Switch'
import RangeSlider from '../components/RangeSlider'
import Randomizer from '../lib/Randomizer'

function MainRender({ list, setWodList, lengthOfWod, setLengthOfWod, setSwitchOne, setSwitchTwo, switchOne, switchTwo, switchThree, setSwitchThree, userList }) {
  const checkWhichList = (switchThree) => (switchThree === false ? list : list.concat(userList))
  const randomizedList = Randomizer(checkWhichList(switchThree))

  return (
    <Container>
      <ButtonForRender setWodList={setWodList} setState={randomizedList} />
      <RangeSlider setLengthOfWod={setLengthOfWod} lengthOfWod={lengthOfWod} />
      <Switch setSwitchOne={setSwitchOne} setSwitchTwo={setSwitchTwo} setSwitchThree={setSwitchThree} switchOne={switchOne} switchTwo={switchTwo} switchThree={switchThree} />
    </Container>
  )
}

export default MainRender

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 3rem);
`

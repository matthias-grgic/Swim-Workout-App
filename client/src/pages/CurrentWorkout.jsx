import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { mainCalc, warmDrillCoolCalc, checkDrills, exerciseAmountDrills, exerciseAmountMain } from '../lib/workoutCalc'
import MapWorkout from '../components/MapWorkout'
import InfoBar from '../components/InfoBar'
import WarmCoolSection from '../components/WarmUpSection'

function CurrentWorkout({ wodList, lengthOfWod, switchOne, switchTwo, setExpandedAccordion }) {
  const [drills, setDrills] = useState([])
  const [main, setMain] = useState([])

  useEffect(() => {
    async function fetchData() {
      const drillsRandom = await wodList.filter((word) => word.type === 'drill').slice(0, exerciseAmountDrills(lengthOfWod))
      const mainRandom = await wodList.filter((word) => word.type === 'main').slice(0, exerciseAmountMain(lengthOfWod, switchTwo))
      return setDrills(drillsRandom), setMain(mainRandom)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <InfoBar lengthOfWod={lengthOfWod} switchOne={switchOne} />
      <WarmCoolSection name='WARM UP' lengthOfWod={lengthOfWod} />
      <ShowDrills current={checkDrills(switchTwo)}>
        <TitleAndLength>
          <h3>DRILLS</h3>
          <div>{warmDrillCoolCalc(lengthOfWod, 200)}</div>
        </TitleAndLength>
        <Drills noBorder>
          <MapWorkout main={drills} lengthOfWod={lengthOfWod} switchTwo={switchTwo} switchOne={switchOne} setExpandedAccordion={setExpandedAccordion} />
        </Drills>
      </ShowDrills>
      <TitleAndLength>
        <h3>MAIN</h3>
        <div>{mainCalc(lengthOfWod, switchTwo)}</div>
      </TitleAndLength>
      <Main noBorder>
        <MapWorkout main={main} lengthOfWod={lengthOfWod} switchTwo={switchTwo} switchOne={switchOne} setExpandedAccordion={setExpandedAccordion} />
      </Main>
      <WarmCoolSection name='COOL DOWN' lengthOfWod={lengthOfWod} />
    </Container>
  )
}

export default CurrentWorkout

const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--main-txt-color);
  margin-bottom: 55px;
  padding: 10px;
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
  h3 {
    padding: 8px 16px;
  }
`

const Drills = styled.section`
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: ${(props) => (props.primary ? '1px solid var(--border-seperator' : null)};
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding: 10px 16px 16px 16px;
`

const Main = styled(Drills)``

const ShowDrills = styled.div`
  display: ${(props) => (props.current === 'show' ? 'block' : 'none')};
`

const TitleAndLength = styled.div`
  color: var(--disabled-txt-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

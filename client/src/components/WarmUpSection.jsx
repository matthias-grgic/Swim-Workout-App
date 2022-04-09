import styled from 'styled-components'
import { warmDrillCoolCalc, warmAndCoolLaps } from '../lib/workoutCalc'

export default function WarmCoolSection({ lengthOfWod, name }) {
  return (
    <>
      <TitleAndLength>
        <h3>{name}</h3>
        <div>{warmDrillCoolCalc(lengthOfWod, 100)}</div>
      </TitleAndLength>
      <WarmOrCoolSection>
        <ExerciseCard noBorder>
          <ExerciseCardsTitle>Freestyle</ExerciseCardsTitle>
          <PlaceholderIMG />
          <p>{warmAndCoolLaps(lengthOfWod)}</p>
        </ExerciseCard>
      </WarmOrCoolSection>
    </>
  )
}

const ExerciseCardsTitle = styled.div`
    flex: 1;
`

const ExerciseCard = styled.div`
    border-bottom: ${(props) => (props.noBorder ? '0px solid var(--border-seperator)' : '1px solid var(--border-seperator);')};
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 0px 10px;
`

const PlaceholderIMG = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    flex: 0 0 50px;
`

const TitleAndLength = styled.div`
    color: var(--disabled-txt-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const WarmOrCoolSection = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: ${(props) => (props.primary ? '1px solid var(--border-seperator' : null)};
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    padding: 10px 16px 16px 16px;
`

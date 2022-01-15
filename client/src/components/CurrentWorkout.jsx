import styled from "styled-components"

function CurrentWorkout({ transferedWodList }) {
    const mappedWODList = transferedWodList.map((item, index) => (
        <ExerciseCards key={index}>
            <p>
                <h4>{item.name}</h4>
            </p>
            <p>Definition: {item.definition}</p>
            <IMGDiv value={item.equipment} />
            <p>Length: {item.length}m</p>
        </ExerciseCards>
    ))
    return <Cards>{mappedWODList}</Cards>
}

export default CurrentWorkout

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    overflow: auto;
    width: 100%;
`

const ExerciseCards = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--border-seperator);
    padding: 15px;
`

const Equipment = styled.div``

const IMGDiv = styled.div`
    height: 40px;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : null)};
`

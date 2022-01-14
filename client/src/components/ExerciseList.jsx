import styled from "styled-components"

function ExerciseList({ transferedList }) {
    const mappedList = transferedList.map((item, index) => (
        <ExerciseCards key={index}>
            <div>
                <h3>{item.name}</h3>
            </div>
            <div>Type - {item.type}</div>
            <div>Equipment: {item.equipment}</div>
            <iframe width="100%" height="100%" src={`${item.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div>Definition: {item.definition}</div>
        </ExerciseCards>
    ))
    return <Cards>{mappedList}</Cards>
}

export default ExerciseList

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
`

const ExerciseCards = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    border-bottom: 1px solid #d1d1d1;
    padding: 15px;
`

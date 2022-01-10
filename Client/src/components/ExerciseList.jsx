import styled from "styled-components"

function ExerciseList({ transferedList }) {
    const mappedList = transferedList.map((item, index) => (
        <ExerciseCards key={index}>
            {/* <div>Id: {item.id}</div> */}
            <div>
                <h4>{item.name}</h4>
            </div>
            <div>Type:{item.type}</div>
            <div>Video:{item.video}</div>
            <div>Beschreibung{item.definition}</div>
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
    margin-top: 400px;
`

const ExerciseCards = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    border-bottom: 1px solid #d1d1d1;
    padding: 15px;
`

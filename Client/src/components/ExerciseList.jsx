import styled from "styled-components"
import { useState, useEffect } from "react"

function ExerciseList() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("http://localhost:4000/test/get")
                const api = await response.json()
                const testlist = api.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        type: item.type,
                        video: item.video,
                        definition: item.definition,
                    }
                })
                setList(testlist)
            } catch (e) {
                console.error(e)
            }
        }
        return fetchMyAPI()
    }, [])

    const mappedList = list.map((item, index) => (
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

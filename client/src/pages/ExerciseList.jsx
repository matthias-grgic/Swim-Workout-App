import styled from "styled-components"
import { useState } from "react"
import search from "../images/search.svg"
import SimpleAccordion from "../components/Accordion"
import FilterButtons from "../components/FilterButtons"
import SearchBar from "../components/SearchBar"

function ExerciseList({ transferedList }) {
    const [data, setData] = useState([])

    return (
        <ExerciseListMain>
            <Title>
                <h2>LIBRARY</h2>
            </Title>
            <SearchAndFilter>
                <SearchBar transferedListForBar={transferedList} transferedSetDataBar={setData} />
                <FilterButtons transferedListForSearch={transferedList} transferedData={data} transferedSetData={setData} />
            </SearchAndFilter>
            {data.map((item, index) => (
                <SimpleAccordion key={index} name={item.name} type={item.type} equipment={item.equipment} video={item.video} text={item.definition} />
            ))}
        </ExerciseListMain>
    )
}

export default ExerciseList

const ExerciseListMain = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    overflow: auto;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
`

const SearchAndFilter = styled.div`
    input[type="text"] {
        background-color: transparent;
        background-image: url(${search});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: right center;
        border: none;
        border-bottom: 1px solid var(--secondary-txt-color);
        font-size: 1rem;
        display: inline-block;
        margin: 0px 0;
        outline: none;
        padding: 10px 40px 10px 15px;
        width: 100%;
    }
`
const Title = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px 16px;
`

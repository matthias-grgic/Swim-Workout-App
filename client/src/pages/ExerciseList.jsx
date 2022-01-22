import styled from "styled-components"
import { useState } from "react"
import SimpleAccordion from "../components/Accordion"
import FilterButtons from "../components/FilterButtons"
import SearchBar from "../components/SearchBar"

function ExerciseList({ transferedList, transferedUserList }) {
    const [dataExercise, setDataExercise] = useState([])

    //Merge Exercise List & User List
    const MergedLists = transferedList.concat(transferedUserList)

    return (
        <ExerciseListMain>
            <Title>
                <h2>LIBRARY</h2>
            </Title>
            <SearchBar transferedListForBar={MergedLists} transferedSetDataExercise={setDataExercise} />
            <FilterButtons transferedListForSearch={MergedLists} transferedSetData={setDataExercise} />
            <AccordionSection>
                {dataExercise.map((item, index) => (
                    <SimpleAccordion key={index} name={item.name} type={item.type} equipment={item.equipment} video={item.video} text={item.definition} />
                ))}
            </AccordionSection>
        </ExerciseListMain>
    )
}

export default ExerciseList

const AccordionSection = styled.div``

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

const Title = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px 16px;
`

import FilterButtons from "../components/FilterButtons"
import SearchBar from "../components/SearchBar"
import SimpleAccordion from "../components/SimpleAccordion"
import styled from "styled-components"
import { useEffect, useState } from "react"

function ExerciseList({ list, userList, expandedAccordion, setExpandedAccordion }) {
    const [dataExercise, setDataExercise] = useState([])

    //Merge Exercise List & User List
    const MergedLists = list.concat(userList)
    useEffect(() => {
        setDataExercise(MergedLists)
    }, [])

    return (
        <ExerciseListMain>
            <Title>
                <h2>LIBRARY</h2>
            </Title>
            <SearchBar transferedListForBar={MergedLists} transferedSetDataExercise={setDataExercise} />
            <FilterButtons transferedListForSearch={MergedLists} transferedSetData={setDataExercise} />
            <AccordionSection>
                {dataExercise.map((item, index) => (
                    <SimpleAccordion key={index} id={item.id} name={item.name} type={item.type} equipment={item.equipment} video={item.video} text={item.definition} expandedAccordion={expandedAccordion} setExpandedAccordion={setExpandedAccordion} />
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
    margin-bottom: 55px;
`

const Title = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px 16px;
`

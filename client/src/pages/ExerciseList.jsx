import FilterButtons from '../components/FilterButtons'
import SearchBar from '../components/SearchBar'
import SimpleAccordion from '../components/SimpleAccordion'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

function ExerciseList({ list, userList, expandedAccordion, setExpandedAccordion }) {
  const [dataExercise, setDataExercise] = useState([])
  const MergedLists = list.concat(userList)

  return (
    <Container>
      <SearchBar transferedListForBar={MergedLists} transferedSetDataExercise={setDataExercise} />
      <FilterButtons transferedListForSearch={MergedLists} transferedSetData={setDataExercise} />
      <AccordionSection>
        {dataExercise.map((item, index) => (
          <SimpleAccordion
            key={index}
            id={item.id}
            name={item.name}
            type={item.type}
            equipment={item.equipment}
            video={item.video}
            text={item.definition}
            expandedAccordion={expandedAccordion}
            setExpandedAccordion={setExpandedAccordion}
          />
        ))}
      </AccordionSection>
    </Container>
  )
}

export default ExerciseList

const AccordionSection = styled.section``

const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--main-txt-color);
  gap: 10px;
  margin-bottom: 55px;
  padding: 10px;
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
`

import FormAdd from '../components/FormAdd'
import SimpleAccordion from '../components/SimpleAccordion'
import styled from 'styled-components'

function Create({ userList, expandedAccordion, setExpandedAccordion }) {
  // Show Delete Button only for UserLibrary
  const showDeleteButton = 'block'

  return (
    <Container>
      <FormAdd />
      <h2>EDIT USER LIBRARY</h2>
      {userList.map((item, index) => (
        <SimpleAccordion
          key={index}
          id={item.id}
          name={item.name}
          type={item.type}
          equipment={item.equipment}
          video={item.video}
          DeleteButtonCSS={showDeleteButton}
          expandedAccordion={expandedAccordion}
          setExpandedAccordion={setExpandedAccordion}
        />
      ))}
    </Container>
  )
}

export default Create
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
  h2 {
    text-align: center;
  }
`

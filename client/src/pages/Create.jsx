import FormAdd from "../components/FormAdd"
import SimpleAccordion from "../components/SimpleAccordion"
import styled from "styled-components"

function Create({ userList, expandedAccordion, setExpandedAccordion }) {
    const showDeleteButton = "block" // Show Delete Button only for UserLibrary

    return (
        <MainDiv>
            <Title>
                <h2>ADD EXERCISE</h2>
            </Title>
            <FormAdd />
            <TitleTwo>
                <h3>EDIT USER LIBRARY</h3>
            </TitleTwo>
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
        </MainDiv>
    )
}

export default Create

const MainDiv = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 55px;
    padding: 10px;
    width: 100%;
    height: 100%;
    overflow: auto;
`

const Title = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 20px 16px;
`

const TitleTwo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 10px 16px;
`

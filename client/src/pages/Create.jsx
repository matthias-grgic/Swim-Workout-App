import styled from "styled-components"
import FormAdd from "../components/FormAdd"
import SimpleAccordion from "../components/Accordion"
import { useState, useEffect } from "react"
import FetchFromApi from "../lib/fetchFromApi"

function Create() {
    //Fetch UserExercises List
    const [userList, setUserList] = useState([])
    useEffect(() => {
        FetchFromApi("/api/getUserExercises", setUserList)
    }, [])

    return (
        <MainDiv>
            <Title>
                <h2>ADD EXERCISE</h2>
            </Title>
            <FormAdd />
            <TitleTwo>
                <h2>USER LIBRARY</h2>
            </TitleTwo>
            {userList.map((item, index) => (
                <SimpleAccordion key={index} name={item.name} type={item.type} equipment={item.equipment} video={item.video} text={item.definition} />
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
    margin-bottom: 50px;
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

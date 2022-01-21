import styled from "styled-components"
import FormAdd from "../components/FormAdd"

function Create() {
    return (
        <MainDiv>
            <Title>
                <h2>ADD EXERCISE</h2>
            </Title>
            <FormAdd />
        </MainDiv>
    )
}

export default Create

const MainDiv = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 50px;
    padding: 26px;
    width: 100%;
    h2 {
        margin-bottom: 10px;
    }
`

const Title = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px 16px;
`

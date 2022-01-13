import styled from "styled-components"

function Create() {
    return (
        <MainDiv>
            <h1>ADD EXERCISE</h1>
            <Form>
                <FormField>
                    <label for="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Exercise name.." />
                </FormField>
                <FormField>
                    <label for="type">Name</label>
                    <select name="type">
                        <option value="australia">Normal</option>
                        <option value="canada">Drill</option>
                        <option value="usa">Mixed</option>
                    </select>
                </FormField>
                <FormField>
                    <label for="name">Name</label>
                    <input type="text" name="color" placeholder="Exercise name.." />
                </FormField>
                <FormField>
                    <label for="subject">Definition</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </FormField>
                <input type="submit" value="SUBMIT" />
            </Form>
        </MainDiv>
    )
}

export default Create

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input[type="text"],
    select,
    textarea {
        border: 1px solid #ccc;
        border-radius: 4px;
        display: inline-block;
        margin: 8px 0;
        padding: 12px 20px;
        width: 100%;
    }
    input[type="submit"] {
        transition: all 0.1s ease-in-out;
        background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
        &:active {
            background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
            color: white;
        }
        &:hover {
            background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
            transition: all 1s ease;
            color: white;
        }
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        margin: 8px 0;
        padding: 14px 20px;
        width: 100%;
    }
    textarea {
        height: 100px;
    }
    label {
        align-self: flex-start;
    }
`
const FormField = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    &button {
        background-color: white;
    }
`

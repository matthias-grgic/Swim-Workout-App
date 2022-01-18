import styled from "styled-components"
import { useState } from "react"

function Create() {
    const [status, setStatus] = useState()

    const handleChange = (event) => setStatus(event.target.value)
    const handleSubmit = (event) => {
        alert(`New Exercise "${status}" added`)
        event.preventDefault()
    }

    return (
        <MainDiv>
            <h2>ADD EXERCISE</h2>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={status} onChange={handleChange} type="text" name="name" placeholder="Exercise" />
                </FormField>
                <FormField>
                    <label htmlFor="type">Type</label>
                    <select name="type">
                        <option value="normal">normal</option>
                        <option value="drill">drill</option>
                    </select>
                </FormField>
                <FormField>
                    <label htmlFor="name">Video</label>
                    <input type="text" name="color" placeholder="Link" />
                </FormField>
                <FormField>
                    <label htmlFor="subject">Definition</label>
                    <textarea id="subject" name="subject" placeholder="..."></textarea>
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
    gap: 10px;
    margin-bottom: 40px;
    width: 70%;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    input[type="text"],
    select,
    textarea {
        border: 1px solid #ccc;
        border-radius: 4px;
        display: inline-block;
        margin: 0px 0;
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
        box-shadow: var(--main-box-shadow);
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        margin: 15px 0;
        padding: 14px 20px;
        width: 100%;
    }

    textarea {
        height: 100px;
        resize: none;
    }

    label {
        margin-bottom: 2px;
        margin-top: 15px;
        width: 100px;
    }
`

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    &button {
        background-color: white;
    }
`

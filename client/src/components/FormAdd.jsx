import styled from "styled-components"
import AddButton from "../images/addbutton.svg"
import { useState } from "react"
import SimpleSnackbarTwo from "../components/Snackbar"
import postToApi from "../lib/postToApi"
import isFormValid from "../lib/formValidation"

function FormAdd() {
    const initalForm = { name: "", type: "main", video: "", definition: "", equipment: "pullbuoy" }
    const [all, setAll] = useState(initalForm)

    const handleChange = (e) => {
        const inputValue = e.target.value
        const newData = { ...all, [e.target.name]: inputValue }
        return setAll(newData)
    }

    return (
        <Form onSubmit={() => postToApi("/api/postexerciselist", all)}>
            <FormField>
                <input type="text" name="name" id="name" value={all.name} onChange={handleChange} placeholder="Exercise" />
            </FormField>
            <FormField>
                <select name="type" value={all.type} onChange={handleChange}>
                    <option value="main">Main</option>
                    <option value="drill">Drill</option>
                </select>
            </FormField>
            <FormField>
                <select name="equipment" value={all.equipment} onChange={handleChange}>
                    <option value="pullbuoy">Pullbuoy</option>
                    <option value="paddles">Paddles</option>
                    <option value="snorkel">Snorkel</option>
                    <option value="fins">Fins</option>
                </select>
            </FormField>
            <FormField>
                <input type="text" name="video" value={all.video} onChange={handleChange} placeholder="Youtube Link" />
            </FormField>
            <FormField>
                <textarea id="subject" name="definition" value={all.definition} onChange={handleChange} placeholder="Short description of the exercise" />
            </FormField>
            <SimpleSnackbarTwo />
        </Form>
    )
}

export default FormAdd

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    input[type="text"],
    select,
    textarea {
        background-color: rgba(255, 255, 255, 0.4);
        font-size: 1rem;
        box-shadow: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: inline-block;
        margin: 0px 0;
        padding: 12px 20px;
    }

    input[type="submit"] {
        transition: all 0.1s ease-in-out;
        background-color: transparent;
        background-image: url(${AddButton});
        background-size: 55px;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        margin: 15px 0;
        padding: 30px;
        width: 100%;
        &:active {
            color: white;
        }

        &:hover {
            transition: all 1s ease;
        }
    }

    textarea {
        height: 100px;
        resize: none;
    }
`

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    &button {
        background-color: white;
    }
`

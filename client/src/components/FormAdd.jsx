import styled from "styled-components"
import AddButton from "../images/addbutton.svg"
import { useState } from "react"
import SimpleSnackbarTwo from "../components/Snackbar"

function FormAdd() {
    const initalForm = { name: "", type: "", video: "", definition: "", equipment: "" }
    const [all, setAll] = useState(initalForm)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(all),
            }
            const fetchResponse = await fetch("/api/postexerciselist", settings)
            const data = await fetchResponse.json()
            return data
        } catch (e) {
            console.error(e)
        }
    }

    const handleChange = (e) => {
        let inputValue = e.target.value
        return setAll({ ...all, [e.target.name]: inputValue })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormField>
                <input type="text" name="name" id="name" value={all.name} onChange={handleChange} placeholder="Exercise" />
            </FormField>
            <FormField>
                <select name="type" value={all.type} onChange={handleChange}>
                    <option value="normal">Normal</option>
                    <option value="drill">Drill</option>
                </select>
            </FormField>
            <FormField>
                <select name="equipment" value={all.equipment} onChange={handleChange}>
                    <option value="pullbuoy">pullbuoy</option>
                    <option value="paddles">paddles</option>
                    <option value="snorkel">snorkel</option>
                    <option value="fins">fins</option>
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

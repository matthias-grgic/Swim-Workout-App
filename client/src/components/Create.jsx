import styled from "styled-components"
import { useState } from "react"
import AddButton from "../images/addbutton.svg"
import SimpleSnackbarTwo from "../lib/Snackbar"

function Create() {
    const [name, setName] = useState("")
    const [type, setType] = useState("normal")
    const [equipment, setEquipment] = useState("pullbuoy")
    const [video, setVideo] = useState("")
    const [definition, setDefinition] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    type: type,
                    video: video,
                    definition: definition,
                    equipment: equipment,
                }),
            }
            const fetchResponse = await fetch("/api/postexerciselist", settings)
            const data = await fetchResponse.json()
            return data
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainDiv>
            <Title>
                <h2>ADD EXERCISE</h2>
            </Title>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Exercise" />
                </FormField>
                <FormField>
                    <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="normal">Normal</option>
                        <option value="drill">Drill</option>
                    </select>
                </FormField>
                <FormField>
                    <select name="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)}>
                        <option value="pullbuoy">pullbuoy</option>
                        <option value="paddles">paddles</option>
                        <option value="snorkel">snorkel</option>
                        <option value="fins">fins</option>
                    </select>
                </FormField>
                <FormField>
                    <input type="text" name="video" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Youtube Link" pattern="https://.*" />
                </FormField>
                <FormField>
                    <textarea id="subject" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)} placeholder="Short description of the exercise" />
                </FormField>
                <SimpleSnackbarTwo />
            </Form>
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

const Title = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px 16px;
`

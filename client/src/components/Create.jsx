import styled from "styled-components"
import { useState } from "react"
import AddButton from "../images/addbutton.svg"

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
            <h2>ADD EXERCISE</h2>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Exercise" />
                </FormField>
                <FormField>
                    <select name="type" value={type} onChange={(e) => setType(e.target[e.target.selectedIndex].id)}>
                        <option id="normal" value="normal">
                            Normal
                        </option>
                        <option id="drill" value="drill">
                            Drill
                        </option>
                    </select>
                </FormField>
                <FormField>
                    <select name="equipment" value={equipment} onChange={(e) => setEquipment(e.target[e.target.selectedIndex].id)}>
                        <option id="pullbuoy" value="pullbuoy">
                            Pullbuoy
                        </option>
                        <option id="paddles" value="paddles">
                            Paddles
                        </option>
                        <option id="snorkel" value="snorkel">
                            Snorkel
                        </option>
                        <option id="fins" value="fins">
                            Fins
                        </option>
                    </select>
                </FormField>
                <FormField>
                    <input type="text" name="video" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Youtube Link" />
                </FormField>
                <FormField>
                    <textarea id="subject" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)} placeholder="Definition"></textarea>
                </FormField>
                <input type="submit" value="" />
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

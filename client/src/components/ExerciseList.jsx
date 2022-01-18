import styled from "styled-components"
import { useState, useEffect } from "react"
import search from "../images/search.svg"
import SimpleAccordion from "../lib/Accordion"

function ExerciseList({ transferedList }) {
    const [data, setData] = useState([])
    const [filtered, setFilterd] = useState(transferedList) //damit die Liste auch anfangs dargestellt wird
    const [result, setResult] = useState("")

    useEffect(() => {
        setData(transferedList)
        setFilterd(transferedList)

        const results = filtered.filter((res) => res.name.toLowerCase().includes(result))
        setData(results)
    }, [result])

    const onChange = (e) => {
        setResult(e.target.value)
    }

    return (
        <Cards>
            <Form>
                <label htmlFor="header-search">
                    <AccessibilityLabel>Search blog posts</AccessibilityLabel>
                </label>
                <input type="text" id="header-search" placeholder="Search.." value={result} onChange={onChange} />
            </Form>
            {data.map((item, index) => (
                <SimpleAccordion key={index} name={item.name} type={item.type} equipment={item.equipment} video={item.video} text={item.definition} />
            ))}
        </Cards>
    )
}

export default ExerciseList

const AccessibilityLabel = styled.label`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
`

const Form = styled.div`
    input[type="text"] {
        background-image: url(${search});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: right center;
        border: none;
        border-bottom: 1px solid var(--border-seperator);
        font-size: 1rem;
        display: inline-block;
        margin: 8px 0;
        outline: none;
        padding: 10px 40px 10px 15px;
        width: 100%;
    }
`

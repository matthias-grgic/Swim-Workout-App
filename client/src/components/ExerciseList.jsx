import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import { useState, useEffect } from "react"
import search from "../images/search.svg"
import SimpleAccordion from "../lib/Accordion"

function ExerciseList({ transferedList }) {
    const [data, setData] = useState([])
    const [filtered, setFilterd] = useState([])
    const [result, setResult] = useState("")

    useEffect(() => {
        setData(transferedList)
        setFilterd(transferedList)

        const results = filtered.filter((res) => res.name.toLowerCase().includes(result))
        setData(results)
    }, [result])
    //console.log(data)

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

const Form = styled.div`
    input[type="text"] {
        border: none;
        border-bottom: 1px solid #ccc;
        /* border-radius: 4px; */
        display: inline-block;
        margin: 8px 0;
        outline: none;
        width: 100%;
        background-image: url(${search});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: right center;
        padding: 10px 40px 10px 15px;
    }
`

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    overflow: auto;
    width: 100%;
    height: 100%;
`
const ExerciseCards = styled.div`
    border-bottom: 1px solid var(--border-seperator);
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
`
const HeadInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
const IMGDiv = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 60px;
`
const Name = styled.div`
    flex: 1;
`
const Type = styled.div`
    color: var(--secondary-txt-color);
    text-align: left;
`
const Video = styled.div``
const Text = styled.div``

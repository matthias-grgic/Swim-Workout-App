import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import { useState, useEffect } from "react"
import search from "../images/search.svg"

function ExerciseList({ transferedList }) {
    const createYouTubeEmbedLink = (link) => link.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/")

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
            {/* {mappedList} */}
            <Form>
                <label htmlFor="header-search">
                    <AccessibilityLabel>Search blog posts</AccessibilityLabel>
                </label>
                <input type="text" id="header-search" placeholder="Search.." value={result} onChange={onChange} />
            </Form>
            {data.map((item, index) => (
                <ExerciseCards key={index}>
                    <HeadInfo>
                        <Name>
                            <h3>{item.name}</h3>
                        </Name>
                        <Type>{item.type.toUpperCase()}</Type>
                        <IMGDiv value={item.equipment} />
                    </HeadInfo>
                    {/* <Video>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`${createYouTubeEmbedLink(item.video)}?showinfo=0?modestbranding=1&iv_load_policy=3&controls=2`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Video>
                    <Text>{item.definition}</Text> */}
                </ExerciseCards>
            ))}
        </Cards>
    )
}

export default ExerciseList

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

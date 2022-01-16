import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"

function ExerciseList({ transferedList }) {
    const createYouTubeEmbedLink = (link) => link.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/")

    const mappedList = transferedList.map((item, index) => (
        <ExerciseCards key={index}>
            <HeadInfo>
                <Name>
                    <h3>{item.name}</h3>
                </Name>
                <Type>{item.type}</Type>
                <IMGDiv value={item.equipment}></IMGDiv>
            </HeadInfo>
            <Video>
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
            <Text>{item.definition}</Text>
        </ExerciseCards>
    ))
    return <Cards>{mappedList}</Cards>
}

export default ExerciseList

const Cards = styled.div`
    color: var(--main-txt-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    overflow: auto;
`
const ExerciseCards = styled.div`
    border-bottom: 1px solid var(--border-seperator);
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
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

const Name = styled.div``

const Type = styled.div``

const Video = styled.div``

const Text = styled.div``

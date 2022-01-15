import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"

function ExerciseList({ transferedList }) {
    const createYouTubeEmbedLink = (link) => link.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/")

    const mappedList = transferedList.map((item, index) => (
        <ExerciseCards key={index}>
            <TitleAndEquipment>
                <h2>{item.name}</h2>
                <IMGDiv value={item.equipment} />
                <p>{item.type}</p>
            </TitleAndEquipment>

            <iframe
                width="100%"
                height="100%"
                src={`${createYouTubeEmbedLink(item.video)}?showinfo=0?modestbranding=1&iv_load_policy=3&controls=2`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
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
    gap: 5px;
    padding: 10px;
    overflow: auto;
`

const IMGDiv = styled.div`
    height: 45px;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
`

const ExerciseCards = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--border-seperator);
    padding: 15px;
`

const Text = styled.div`
    margin-top: 15px;
`

const TitleAndEquipment = styled.div`
    margin-bottom: 15px;
`

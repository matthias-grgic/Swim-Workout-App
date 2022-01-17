import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import Arrow from "../images/arrowup.svg"
import { flexbox } from "@mui/system"

export default function SimpleAccordion({ name, type, equipment, video, text }) {
    const createYouTubeEmbedLink = (link) => link.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/")

    const svgIcon = (
        <ExpandMoreIcon>
            <img alt="edit" src={Arrow} />
        </ExpandMoreIcon>
    )

    return (
        <div>
            <Accordion>
                <AccordionSummaryStyled sx={{}} expandIcon={svgIcon} aria-controls="panel1a-content" id="panel1a-header">
                    <HeadInfo>
                        <Name>
                            <h4>{name}</h4>
                        </Name>
                        <Type>{type}</Type>
                        <IMGDiv value={equipment} />
                    </HeadInfo>
                </AccordionSummaryStyled>
                <AccordionDetails>
                    <Video>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`${createYouTubeEmbedLink(video)}?showinfo=0?modestbranding=1&iv_load_policy=3&controls=2`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Video>
                    <Text>{text}</Text>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const AccordionSummaryStyled = styled(AccordionSummary)``

const HeadInfo = styled.div`
    display: flex;
`
const IMGDiv = styled.div`
    background-position: right;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    /* flex: 0 0 60px; */
`
const Name = styled.div`
    /* flex: 1; */
`
const Type = styled.div`
    color: var(--secondary-txt-color);
    /* text-align: left; */
`
const Video = styled.div``
const Text = styled.div``

const ExpandMoreIcon = styled.div``

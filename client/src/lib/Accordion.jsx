import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import Arrow from "../images/arrowup.svg"
import Typography from "@mui/material/Typography"

export default function SimpleAccordion({ name, type, equipment, video, text }) {
    const createYouTubeEmbedLink = (link) => link.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/")

    return (
        <div>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary srx={{ pdding: "10px" }} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{ width: "60%", flexShrink: 0 }}>
                        <h4>{name}</h4>
                    </Typography>
                    <Typography sx={{ width: "20%", flexShrink: 0, color: "text.secondary" }}>{type}</Typography>
                    <Typography sx={{ width: "20%", flexShrink: 0 }}>
                        Bild
                        <IMGDiv value={equipment} />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`${createYouTubeEmbedLink(video)}?showinfo=0?modestbranding=1&iv_load_policy=3&controls=2`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <Text>{text}</Text>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const IMGDiv = styled.div`
    background-size: 24px;
    background-repeat: no-repeat;
    background-image: ${(props) => (props.value === "pullbuoy" ? `url(${PullbuoyImg})` : props.value === "paddles" ? `url(${HandPaddleImg})` : props.value === "fins" ? `url(${FinsImg})` : props.value === "snorkel" ? `url(${SnorkelImg})` : null)};
    flex: 0 0 20px;
`

const Text = styled.div``

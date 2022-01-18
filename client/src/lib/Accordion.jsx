import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"
import styled from "styled-components"
import Typography from "@mui/material/Typography"

export default function SimpleAccordion({ name, type, equipment, video, text }) {
    const createYouTubeEmbedLink = (link) => link.replace("https://www.youtube.com/watch?v=", "https://www.youtube-nocookie.com/embed/")
    const equipmentLogo = (item) => (item === "pullbuoy" ? `url(${PullbuoyImg})` : item === "paddles" ? `url(${HandPaddleImg})` : item === "fins" ? `url(${FinsImg})` : item === "snorkel" ? `url(${SnorkelImg})` : null)

    return (
        <div>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{ width: "60%", flexShrink: 0, color: "var(--main-txt-color)" }}>{name}</Typography>
                    <Typography sx={{ width: "20%", flexShrink: 0, color: "text.secondary" }}>{type}</Typography>
                    <Typography sx={{ width: "20%", flexShrink: 0, backgroundImage: `${equipmentLogo(equipment)}`, backgroundSize: "auto", backgroundRepeat: "no-repeat" }}></Typography>
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
                    <TextStyled> {text} </TextStyled>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const TextStyled = styled.div`
    margin-top: 10px;
`

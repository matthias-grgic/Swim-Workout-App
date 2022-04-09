import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import deleteFromApi from '../lib/deleteFromApi'
import FinsImg from '../images/equipment/fins.svg'
import HandPaddleImg from '../images/equipment/handpaddles.svg'
import SnorkelImg from '../images/equipment/snorkel.svg'
import PullbuoyImg from '../images/equipment/pullbuoy.svg'

export default function SimpleAccordion({
  name, type, equipment, video, text, id, DeleteButtonCSS, expandedAccordion, setExpandedAccordion
}) {
  const createYouTubeEmbedLink = (link) => link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube-nocookie.com/embed/')
  const equipmentLogo = (item) => (item === 'pullbuoy' ? `url(${PullbuoyImg})` : item === 'paddles' ? `url(${HandPaddleImg})` : item === 'fins' ? `url(${FinsImg})` : item === 'snorkel' ? `url(${SnorkelImg})` : null)
  const handleAccordion = (panel) => (event, isExpanded) => setExpandedAccordion(isExpanded ? panel : false)
  return (
    <div>
      <Accordion id={id} expanded={expandedAccordion === `${id}`} onChange={handleAccordion(id)} TransitionProps={{ unmountOnExit: true }} sx={{ backgroundColor: 'rgba(255,255,255, 0.3)', boxShadow: 'none' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ width: '60%', flexShrink: 0, color: 'var(--main-txt-color)' }}>{name}</Typography>
          <Typography sx={{ width: '20%', flexShrink: 0, color: 'text.secondary' }}>{type}</Typography>
          <Typography sx={{
            width: '20%', flexShrink: 0, backgroundImage: `${equipmentLogo(equipment)}`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat'
          }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            width="100%"
            height="100%"
            src={`${createYouTubeEmbedLink(video)}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <TextStyled>
            {text}
            <ButtonDelete
              displayInfo={DeleteButtonCSS}
              onClick={() => {
                deleteFromApi(`/api/deleteUserExercises/${id}`)
                window.location.reload(false)
              }}
            >
              <h3>DELETE</h3>
            </ButtonDelete>
          </TextStyled>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

const TextStyled = styled.div`
    color: var(--main-txt-color);
    margin-top: 10px;
    white-space: pre-line;
`

const ButtonDelete = styled.button`
    background: transparent;
    border: 1px solid red;
    color: black;
    display: ${(props) => (props.displayInfo === 'block' ? 'block' : 'none')};
    padding: 5px;
    width: 100px;
`

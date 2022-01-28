import styled from "styled-components"
import LottieLogoTWO from "../components/lottieanimation 2"

function Settings() {
    return (
        <MainDiv>
            <Infos>
                <h3>Sources</h3>
                <Sources>
                    <p>
                        <a href="https://www.youtube.com/Speedo/">SpeedoInternational</a>
                    </p>
                    <p>
                        <a href="https://www.trainingmitsystem.de/">Trainingmitsystem</a>
                    </p>
                </Sources>
            </Infos>
            <LottieLogoTWO />
        </MainDiv>
    )
}

export default Settings

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const Infos = styled.div`
    border-top: 1px solid var(--border-seperator);
    display: flex;
    flex-direction: column;
    z-index: 1;
`

const Sources = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
    color: var(--secondary-txt-color);
`

import styled from "styled-components"

function Settings() {
    return (
        <MainDiv>
            <Infos>
                <TitleSmall>Sources</TitleSmall>
                <Sources>
                    <p>
                        <a href="https://www.youtube.com/Speedo/">SpeedoInternational</a>
                    </p>
                    <p>
                        <a href="https://www.trainingmitsystem.de/">Trainingmitsystem</a>
                    </p>
                </Sources>
            </Infos>
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
    display: flex;
    flex-direction: column;
`

const TitleSmall = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #5a5a5a;
`

const Sources = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #a3a3a3;
`

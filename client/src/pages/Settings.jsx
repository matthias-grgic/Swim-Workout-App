import styled from "styled-components"
import LottieanimationTwo from "../components/LottieAnimationTwo"

function Settings() {
    return (
        <MainDiv>
            <Sources>
                <h2>ABOUT</h2>
                <Text>
                    {`This App creates a customized swimming workout accordingly to your desires. 
                        
                        It uses a database of exercises to generate a custom workout and displays everything you need to get your swimming day started. 
                        
                        Create a workout, add swimming exercises and browse through training videos to be prepared for your next pool workout.`}
                </Text>
                <Links>
                    <h2>SOURCES</h2>
                    <a href="https://www.youtube.com/Speedo/">SpeedoInternational</a>
                    <a href="https://www.trainingmitsystem.de/">Trainingmitsystem</a>
                    <a href="https://github.com/matthias-grgic/capstone-project">GitHub Project Rep</a>
                </Links>
            </Sources>
            <LottieanimationTwo />
        </MainDiv>
    )
}

export default Settings

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const MainDiv = styled.div`
    align-items: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    h2 {
        color: var(--main-txt-color);
        margin-bottom: 10px;
    }
`

const Sources = styled.div`
    color: var(--secondary-txt-color);
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 60vh;
    margin: 30px;
    margin-bottom: 10px;
    z-index: 1;
`

const Text = styled.p`
    margin-bottom: 40px;
    margin-top: 5px;
    color: var(--main-txt-color);
    white-space: pre-line;
`

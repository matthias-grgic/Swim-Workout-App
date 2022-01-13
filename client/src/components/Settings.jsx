import styled from "styled-components"

function Settings() {
    return (
        <MainDiv>
            <div>Settings</div>
            <Infos>
                <p>Sources</p>
                <p>SpeedoInternational @Youtube</p>
                <p>...</p>
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
    color: #a3a3a3;
`

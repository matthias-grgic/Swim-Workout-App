import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function MainRender({ transferedList }) {
    function newWOD(originArray, start, end, factor) {
        const result = originArray.slice(start, end)
        return result
    }

    useEffect(() => {
        //POST TO API
        async function postToAPI() {
            try {
                const response = await fetch("http://localhost:4000/test/postworkoutlist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(),
                })
                const data = await response.json()
                // enter you logic when the fetch is successful
                console.log(data)
            } catch (e) {
                console.error(e)
            }
        }
        return postToAPI()
    }, [])

    return (
        <MainDiv>
            <Link to="/CurrentWorkout">
                <RenderButton onClick={() => postToAPI(newWOD(transferedList, 1, 4))}>GO</RenderButton>{" "}
            </Link>
            <Slider type="range"></Slider>
            <MiniLogo src="src/images/minilogo.svg" alt="swimmer-logo" />
            <ToggleDiv>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
                <ToggleSwitch type="checkbox"></ToggleSwitch>
            </ToggleDiv>
        </MainDiv>
    )
}

export default MainRender

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const RenderButton = styled.button`
    font-size: 2.5rem;
    font-family: "Righteous", Arial;
    background: white;
    padding: 0.25em 1em;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    transition: all 0.1s ease-in-out;
    margin-top: 15px;
    &:active {
        background: rgb(235, 235, 235, 0.5);
        color: #acd6fc;
    }
`

const MiniLogo = styled.img``

const Slider = styled.input``

const ToggleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
`

const ToggleSwitch = styled.input``

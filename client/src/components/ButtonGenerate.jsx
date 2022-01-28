import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function ButtonForRender({ setWodList, setState }) {
    const navigate = useNavigate()

    function setStateAndRedirect(setState) {
        setWodList(setState)
        navigate("/CurrentWorkout")
    }

    return <ButtonStyled onClick={() => setStateAndRedirect(setState)}>GO</ButtonStyled>
}

const ButtonStyled = styled.button`
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
    border: none;
    border-radius: 50%;
    box-shadow: var(--main-box-shadow);
    color: white;
    cursor: pointer;
    font-size: 2.8rem;
    font-family: "Righteous", Arial;
    height: 200px;
    margin-top: 15px;
    padding: 0.25em 1em;
    position: relative;
    width: 200px;
    transition: all 0.1s ease-in-out;

    &:active {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        color: white;
    }
    &:hover {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        transition: all 1s ease;
        color: white;
    }
`

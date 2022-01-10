import styled from "styled-components"
import { Link } from "react-router-dom"
import IMG_Home from "../images/home.svg"
import IMG_Create from "../images/create.svg"
import IMG_Favourites from "../images/favourites.svg"
import IMG_Settings from "../images/settings.svg"
import IMG_CurrentWorkout from "../images/currentworkout.svg"

function Footer() {
    return (
        <NavBar>
            <Link to="/">
                <ImgLink src={IMG_Home} alt="home" />
            </Link>

            <Link to="/CurrentWorkout">
                <ImgLink src={IMG_CurrentWorkout} alt="currentworkout" />
            </Link>

            <Link to="/Create">
                <ImgLink src={IMG_Create} alt="create" />
            </Link>

            <Link to="/ExerciseList">
                <ImgLink src={IMG_Favourites} alt="favourites" />
            </Link>

            <Link to="/Settings">
                <ImgLink src={IMG_Settings} alt="settings" />
            </Link>
        </NavBar>
    )
}

export default Footer

const NavBar = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 1;
    justify-content: space-around;
    padding: 0.5rem;
    gap: 1rem;
    width: 100%;
    background: rgba(240, 240, 240, 0.2);
`
const ImgLink = styled.img`
    width: 38px;
`

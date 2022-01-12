import styled from "styled-components"
import { NavLink } from "react-router-dom"
import IMG_Home from "../images/home.svg"
import IMG_Create from "../images/create.svg"
import IMG_Favourites from "../images/favourites.svg"
import IMG_Settings from "../images/settings.svg"
import IMG_CurrentWorkout from "../images/currentworkout.svg"

function Footer() {
    return (
        <NavBar>
            <NavLink to="/">
                <ImgLink src={IMG_Home} alt="home" />
            </NavLink>

            <NavLink to="/CurrentWorkout">
                <ImgLink src={IMG_CurrentWorkout} alt="currentworkout" />
            </NavLink>

            <NavLink to="/ExerciseList">
                <ImgLink src={IMG_Favourites} alt="favourites" />
            </NavLink>

            <NavLink to="/Create">
                <ImgLink src={IMG_Create} alt="create" />
            </NavLink>

            <NavLink to="/Settings">
                <ImgLink src={IMG_Settings} alt="settings" />
            </NavLink>
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
    padding: 8px;
    gap: 1rem;
    width: 100%;
    background: rgba(240, 240, 240, 0);
`
const ImgLink = styled.img`
    width: 38px;
`

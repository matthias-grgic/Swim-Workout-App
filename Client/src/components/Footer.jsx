import styled from "styled-components"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <NavBar>
            <Link to="/">
                <ImgLink src="src/images/home.svg" alt="home" />
            </Link>

            <Link to="/">
                <ImgLink src="src/images/create.svg" alt="create" />
            </Link>

            <Link to="/ExerciseList">
                <ImgLink src="src/images/favourites.svg" alt="favourites" />
            </Link>

            <Link to="/">
                <ImgLink src="src/images/settings.svg" alt="settings" />
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
`
const ImgLink = styled.img`
    width: 34px;
`

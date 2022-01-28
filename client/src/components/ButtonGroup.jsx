import postToAPI from "../lib/postToApi"
import styled from "styled-components"

export default function ButtonSection({ currentWOD }) {
    //SAVE WORKOUT TO FAVOURITES
    const saveWorkout = async (e) => {
        e.preventDefault()
        await postToAPI("/api/postworkoutlist", currentWOD)
    }

    return (
        <ButtonGroup>
            <ButtonLeft>
                <svg height="22px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="#1875d1" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000">
                    <title id="favouriteIconTitle">Favourite</title>{" "}
                    <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />{" "}
                </svg>
            </ButtonLeft>
            <ButtonRight>
                <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1875d1">
                    <path d="M482.195 226.196C482.195 101.471 380.725 0 256.001 0S29.805 101.471 29.805 226.196c0 7.409 6.007 13.416 13.416 13.416s13.416-6.008 13.416-13.416c0-109.93 89.434-199.363 199.363-199.363s199.363 89.434 199.363 199.363c0 109.928-89.434 199.362-199.363 199.362h-23.276l33.282-37.255c4.937-5.525 4.458-14.007-1.067-18.944-5.525-4.937-14.008-4.457-18.944 1.068l-47.576 53.255c-7.788 8.718-7.788 21.866 0 30.584l47.576 53.255c2.651 2.968 6.322 4.478 10.01 4.478 3.181 0 6.375-1.126 8.934-3.41 5.526-4.937 6.004-13.419 1.067-18.944l-33.282-37.255H256c124.725 0 226.195-101.471 226.195-226.194z" />
                </svg>
            </ButtonRight>
        </ButtonGroup>
    )
}

const ButtonLeft = styled.button`
    background-color: transparent;
    border: 1px #1875d1 solid;
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    outline: 0;
    overflow: hidden;
    padding: 0px 20px;
    height: 32px;
    text-align: center;
    /* :hover {
        background-color: #deebf8;
    } */
    background-position: center;
    transition: 0.6s;
    :hover {
        background: #deebf8 radial-gradient(circle, transparent 1%, #becfe0 1%) center/15000%;
    }
    :active {
        background-color: #96a8bb;
        background-size: 100%;
        transition: 0s;
    }
`
const ButtonRight = styled(ButtonLeft)`
    border-right: 1px #1875d1 solid;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

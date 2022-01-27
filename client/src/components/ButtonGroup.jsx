import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"
import postToAPI from "../lib/postToApi"

export default function GroupSizesColors({ currentWOD }) {
    //SAVE WORKOUT TO FAVOURITES
    const saveWorkout = async (e) => {
        e.preventDefault()
        await postToAPI("/api/postworkoutlist", currentWOD)
    }

    const buttons = [
        <Button
            sx={{
                width: 65,
                "&:.MuiButton-textInherit": {
                    color: "red",
                },
            }}
            onClick={saveWorkout}
            color="info"
            key="one"
        >
            Save
            {/* <svg style={{ marginLeft: "10px" }} width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1875d1">
                <path d="M18,7 L20.5,7 C20.7761424,7 21,7.22385763 21,7.5 C21,7.77614237 20.7761424,8 20.5,8 L18,8 L18,10.5 C18,10.7761424 17.7761424,11 17.5,11 C17.2238576,11 17,10.7761424 17,10.5 L17,8 L14.5,8 C14.2238576,8 14,7.77614237 14,7.5 C14,7.22385763 14.2238576,7 14.5,7 L17,7 L17,4.5 C17,4.22385763 17.2238576,4 17.5,4 C17.7761424,4 18,4.22385763 18,4.5 L18,7 Z M11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 L3.5,8 C3.22385763,8 3,7.77614237 3,7.5 C3,7.22385763 3.22385763,7 3.5,7 L11.5,7 Z M14.5,12 C14.7761424,12 15,12.2238576 15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L3.5,13 C3.22385763,13 3,12.7761424 3,12.5 C3,12.2238576 3.22385763,12 3.5,12 L14.5,12 Z M20.5,17 C20.7761424,17 21,17.2238576 21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L3.5,18 C3.22385763,18 3,17.7761424 3,17.5 C3,17.2238576 3.22385763,17 3.5,17 L20.5,17 Z" />
            </svg> */}
        </Button>,
        <Button
            sx={{
                width: 65,
                "&:MuiButton-text": {
                    color: "black",
                },
            }}
            color="info"
            key="three"
        >
            Reload
            {/* <svg style={{ marginLeft: "10px" }} width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1875d1">
                <path d="M482.195 226.196C482.195 101.471 380.725 0 256.001 0S29.805 101.471 29.805 226.196c0 7.409 6.007 13.416 13.416 13.416s13.416-6.008 13.416-13.416c0-109.93 89.434-199.363 199.363-199.363s199.363 89.434 199.363 199.363c0 109.928-89.434 199.362-199.363 199.362h-23.276l33.282-37.255c4.937-5.525 4.458-14.007-1.067-18.944-5.525-4.937-14.008-4.457-18.944 1.068l-47.576 53.255c-7.788 8.718-7.788 21.866 0 30.584l47.576 53.255c2.651 2.968 6.322 4.478 10.01 4.478 3.181 0 6.375-1.126 8.934-3.41 5.526-4.937 6.004-13.419 1.067-18.944l-33.282-37.255H256c124.725 0 226.195-101.471 226.195-226.194z" />
            </svg>{" "} */}
        </Button>,
    ]
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                    mb: 1.5,
                },
            }}
        >
            <ButtonGroup size="small" aria-label="small button group">
                {buttons}
            </ButtonGroup>
        </Box>
    )
}

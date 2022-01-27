import AddButton from "../images/addbutton.svg"
import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import Snackbar from "@mui/material/Snackbar"
import styled from "styled-components"

export default function SimpleSnackbarTwo() {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}></Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    return (
        <SnackBarOutput>
            <input type="submit" value="" onClick={handleClick} />
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                sx={{
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: "#39C16C",
                    },
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Successfully added"
                action={action}
            />
        </SnackBarOutput>
    )
}

const SnackBarOutput = styled.div`
    input[type="submit"] {
        transition: all 0.1s ease-in-out;
        background-color: transparent;
        background-image: url(${AddButton});
        background-size: 55px;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        margin: 15px 0;
        padding: 30px;
        width: 100%;
        &:active {
            color: white;
        }

        &:hover {
            transition: all 1s ease;
        }
    }
`

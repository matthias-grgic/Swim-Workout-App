import * as React from "react"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function PopoverButton() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined

    return (
        <div>
            <Button aria-describedby={id} onClick={handleClick}>
                INFO
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Typography sx={{ p: 2 }}>Create your custom Swim Workout. Simply define your Distance, Pool Length and whether you'd like to include Drills.</Typography>
            </Popover>
        </div>
    )
}

import { styled } from "@mui/material/styles"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"

export default function CustomizedSwitches({ setSwitchOne, setSwitchTwo }) {
    const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    backgroundColor: theme.palette.mode === "dark" ? "#8699ec" : "#647ef0",
                    opacity: 1,
                    border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.5,
                },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#4a63ec",
                border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
            },
        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === "light" ? "#c2c2c2" : "#39393D",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
                duration: 500,
            }),
        },
    }))

    return (
        <FormGroup sx={{ display: "flex", justifyContent: "center" }}>
            <Stack spacing={1} alignItems="center">
                <Typography sx={{ display: "flex", flex: "1" }}>Length</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>25m</Typography>
                    <FormControlLabel control={<IOSSwitch onChange={() => setSwitchOne((switchOne) => !switchOne)} sx={{ m: 1 }} />} label="" />
                    <Typography>50m </Typography>
                </Stack>
            </Stack>
            <Stack spacing={1} alignItems="center">
                <Typography sx={{ display: "flex", flex: "1" }}>Drills</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Yes</Typography>
                    <FormControlLabel control={<IOSSwitch onChange={() => setSwitchTwo((switchTwo) => !switchTwo)} sx={{ m: 1 }} />} label="" />
                    <Typography>No</Typography>
                </Stack>
            </Stack>
        </FormGroup>
    )
}

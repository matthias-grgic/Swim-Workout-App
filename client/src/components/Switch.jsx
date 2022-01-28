import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import Stack from "@mui/material/Stack"
import Switch from "@mui/material/Switch"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"

export default function CustomizedSwitches({ setSwitchOne, setSwitchTwo, switchOne, switchTwo, switchThree, setSwitchThree }) {
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
                    backgroundColor: theme.palette.mode === "dark" ? "#8699ec" : "#64b1f0",
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
            backgroundColor: theme.palette.mode === "light" ? "#b4b5d3" : "#9090b3",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
                duration: 500,
            }),
        },
    }))

    return (
        <FormGroup sx={{ display: "flex", justifyContent: "center" }}>
            <Stack spacing={0} sx={{ mb: 1.5 }} alignItems="center">
                <Typography sx={{ display: "flex", flex: "1" }}>Length</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>50m</Typography>
                    <FormControlLabel control={<IOSSwitch checked={switchOne} onChange={() => setSwitchOne(event.target.checked)} sx={{ mr: 1, ml: 1, mt: 0.5 }} />} label="" />
                    <Typography>25m</Typography>
                </Stack>
            </Stack>
            <Stack spacing={0} sx={{ mb: 2 }} alignItems="center">
                <Typography sx={{ display: "flex", flex: "1" }}>Drills</Typography>
                <Stack direction="row" spacing={1} sx={{ p: 0 }} alignItems="center">
                    <Typography>No</Typography>
                    <FormControlLabel control={<IOSSwitch checked={switchTwo} onChange={() => setSwitchTwo(event.target.checked)} sx={{ mr: 1, ml: 1, mt: 0.5 }} />} label="" />
                    <Typography>Yes</Typography>
                </Stack>
            </Stack>
            <Stack spacing={0} sx={{ mb: 2 }} alignItems="center">
                <Typography sx={{ display: "flex", flex: "1" }}>User library</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>No</Typography>
                    <FormControlLabel control={<IOSSwitch checked={switchThree} onChange={() => setSwitchThree(event.target.checked)} sx={{ mr: 1, ml: 1, mt: 0.5 }} />} label="" />
                    <Typography>Yes</Typography>
                </Stack>
            </Stack>
        </FormGroup>
    )
}

// onChange={() => setSwitchOne((switchOne) => !switchOne)}

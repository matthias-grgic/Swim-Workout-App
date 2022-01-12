import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

const marks = [
    {
        value: 0,
        label: "1000m",
    },
    {
        value: 50,
        label: "2000m",
    },
    {
        value: 100,
        label: "3000m",
    },
]

function valuetext(value) {
    return `${value}m`
}

export default function DiscreteSliderMarks() {
    return (
        <Box sx={{ width: 200 }}>
            <Slider aria-label="swimming-length" defaultValue={0} getAriaValueText={valuetext} step={50} valueLabelDisplay="auto" marks={marks} />
        </Box>
    )
}

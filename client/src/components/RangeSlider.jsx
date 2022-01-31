import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

const marks = [
    {
        value: 0,
        label: "1000 m",
    },
    {
        value: 50,
        label: "2000 m",
    },
    {
        value: 100,
        label: "3000 m",
    },
]

function valuetext(value) {
    return `${value}m`
}

console.log()

export default function RangeSlider({ lengthOfWod, setLengthOfWod }) {
    return (
        <Box sx={{ width: 200 }}>
            <Slider aria-label="swimming-length" value={lengthOfWod} getAriaValueText={valuetext} step={50} valueLabelDisplay="off" marks={marks} onChange={(e) => setLengthOfWod(e.target.value)} />
        </Box>
    )
}

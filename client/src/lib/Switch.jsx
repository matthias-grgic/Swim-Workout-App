import styled from "styled-components"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

function SwitchLabels() {
    return (
        <FormGroupTwo>
            <FormControlLabel control={<Switch defaultChecked />} label="25m" />
            <FormControlLabel control={<Switch defaultChecked />} label="Equipment" />
            <FormControlLabel control={<Switch defaultChecked />} label="Drills" />
            <FormControlLabel control={<Switch defaultChecked />} label="Long" />
            <FormControlLabel disabled control={<Switch />} label="etc." />
        </FormGroupTwo>
    )
}

export default SwitchLabels

const FormGroupTwo = styled(FormGroup)`
    display: block;
    margin-left: 30px;
`

import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Switch from "../components/Switch"
import RangeSlider from "../components/RangeSlider"
import LottieLogoTwo from "../components/lottieanimation"

function MainRender({ list, setWodList, setLengthOfWod, setSwitchOne }) {
    const navigate = useNavigate()

    //RANDOMIZE THE EXERCISE LIST
    const newWOD = list
        .map((value) => ({ value, sort: Math.random() })) //put each element in the array in an object, and give it a random sort key
        .sort((a, b) => a.sort - b.sort) //sort using the random key
        .map(({ value }) => value) //unmap to get the original objects

    function setStateAndRedirect(newWOD) {
        setWodList(newWOD)
        navigate("/CurrentWorkout")
    }

    return (
        <MainDiv>
            <ButtonForRender onClick={() => setStateAndRedirect(newWOD)}>GO</ButtonForRender>
            <RangeSlider setLengthOfWod={setLengthOfWod} />
            <SwitchSection>
                <Switch setSwitchOne={setSwitchOne} />
            </SwitchSection>
        </MainDiv>
    )
}

export default MainRender

const ButtonForRender = styled.button`
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
    border: none;
    border-radius: 50%;
    box-shadow: var(--main-box-shadow);
    color: white;
    cursor: pointer;
    font-size: 2.8rem;
    font-family: "Righteous", Arial;
    height: 200px;
    margin-top: 15px;
    padding: 0.25em 1em;
    position: relative;
    width: 200px;
    transition: all 0.1s ease-in-out;

    &:active {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        color: white;
    }
    &:hover {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        transition: all 1s ease;
        color: white;
    }
`

const LottieFile = styled.div``

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const SwitchSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 0px;
`

{
    /* {isLoading ? <LottieLogoTwo /> : null}  && setLoading(true)   // const [isLoading, setLoading] = useState(false) */
}

// const newObj = Object.assign(
//     {},
//     ...newWOD.map((item) => ({
//         name: item.name,
//         type: item.type,
//         video: item.video,
//         definition: item.definition,
//         equipment: item.equipment,
//         length: item.length,
//     }))
// )

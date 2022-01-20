import styled from "styled-components"
import PullbuoyImg from "../images/equipment/pullbuoy.svg"
import HandPaddleImg from "../images/equipment/handpaddles.svg"
import FinsImg from "../images/equipment/fins.svg"
import SnorkelImg from "../images/equipment/snorkel.svg"

function FilterButtons({ transferedData, transferedSetData, transferedListForSearch }) {
    return (
        <FilterButtonsStyled>
            <Button
                onClick={() => {
                    transferedSetData(transferedListForSearch)
                }}
            >
                ALL
            </Button>
            <ButtonPB
                onClick={() => {
                    const filteredType = transferedData.filter((item) => item.equipment === "pullbuoy")
                    return transferedSetData(filteredType)
                }}
            ></ButtonPB>
            <ButtonHP
                onClick={() => {
                    const filteredType = transferedData.filter((item) => item.equipment === "paddles")
                    return transferedSetData(filteredType)
                }}
            ></ButtonHP>
            <ButtonFN
                onClick={() => {
                    const filteredType = transferedData.filter((item) => item.equipment === "fins")
                    return transferedSetData(filteredType)
                }}
            ></ButtonFN>
            <ButtonSN
                onClick={() => {
                    const filteredType = transferedData.filter((item) => item.equipment === "snorkel")
                    return transferedSetData(filteredType)
                }}
            >
                4
            </ButtonSN>
        </FilterButtonsStyled>
    )
}

export default FilterButtons

const FilterButtonsStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
    margin-top: 10px;
`
const Button = styled.button`
    background-color: transparent;
    border-style: none;
    padding: 10px;
`
const ButtonPB = styled(Button)`
    background-image: url(${PullbuoyImg});
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
`
const ButtonHP = styled(ButtonPB)`
    background-image: url(${HandPaddleImg});
`
const ButtonFN = styled(ButtonPB)`
    background-image: url(${FinsImg});
`
const ButtonSN = styled(ButtonPB)`
    background-image: url(${SnorkelImg});
`

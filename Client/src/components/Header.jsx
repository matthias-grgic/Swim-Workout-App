import styled from "styled-components"

function Header() {
    return <Title>SWIM</Title>
}

export default Header

const Title = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    font-family: "Righteous", Arial;
    font-size: 3rem;
`

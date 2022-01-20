import styled from "styled-components"

function Header({ title }) {
    return <Title>{title}</Title>
}

export default Header

const Title = styled.div`
    position: fixed;
    top: 0;
    font-family: "Righteous", Arial;
    font-size: 3rem;
    padding-top: 8px;
    color: var(--main-txt-color);
`
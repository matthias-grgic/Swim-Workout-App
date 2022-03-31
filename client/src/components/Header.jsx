import styled from 'styled-components'

function Header({ title }) {
  return <Title>{title}</Title>
}

export default Header

const Title = styled.header`
  color: var(--main-txt-color);
  font-family: 'Righteous', Arial;
  font-size: clamp(3rem, 3.5vw, 5rem);
  margin-bottom: 20px;
  padding-top: 8px;
`

import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function ButtonForRender({ setWodList, setState }) {
  const navigate = useNavigate()
  function setStateAndRedirect(setState) {
    setWodList(setState)
    navigate('/CurrentWorkout')
  }

  return (
    <ButtonStyled data-cy='buttonrender' onClick={() => setStateAndRedirect(setState)}>
      GO
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
  border: none;
  border-radius: 50%;
  box-shadow: var(--main-box-shadow);
  color: white;
  cursor: pointer;
  font-size: clamp(3rem, 4vw, 6rem);
  font-family: 'Righteous', Arial;
  height: 200px;
  width: 200px;

  &:active {
    background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
    color: white;
  }
  &:hover {
    background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
    color: white;
  }
`

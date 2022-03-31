import styled from 'styled-components'
import Create from './pages/Create'
import CurrentWorkout from './pages/CurrentWorkout'
import ExerciseList from './pages/ExerciseList'
import Navigation from './components/Navigation'
import Header from './components/Header'
import MainRender from './pages/LandingPage'
import Settings from './pages/Settings'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FetchFromApi from './lib/fetchFromApi'

function App() {
  const [list, setList] = useState([])
  const [wodList, setWodList] = useState([])
  const [userList, setUserList] = useState([])
  const [lengthOfWod, setLengthOfWod] = useState(0)
  const [switchOne, setSwitchOne] = useState(true)
  const [switchTwo, setSwitchTwo] = useState(true)
  const [switchThree, setSwitchThree] = useState(false)
  const [expandedAccordion, setExpandedAccordion] = useState(false)

  //Fetch Exercise List
  useEffect(() => {
    FetchFromApi('/api/getexerciselist', setList)
  }, [])

  //Fetch UserExercises List
  useEffect(() => {
    FetchFromApi('/api/getUserExercises', setUserList)
  }, [])

  return (
    <Main>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header title={'SWIM'} />
              <MainRender
                list={list}
                setWodList={setWodList}
                lengthOfWod={lengthOfWod}
                setLengthOfWod={setLengthOfWod}
                setSwitchOne={setSwitchOne}
                setSwitchTwo={setSwitchTwo}
                switchOne={switchOne}
                switchTwo={switchTwo}
                switchThree={switchThree}
                setSwitchThree={setSwitchThree}
                userList={userList}
              />
            </>
          }
        />
        <Route
          path='/CurrentWorkout'
          element={
            <>
              <Header title={'WORKOUT'} />
              <CurrentWorkout wodList={wodList} lengthOfWod={lengthOfWod} switchOne={switchOne} switchTwo={switchTwo} setExpandedAccordion={setExpandedAccordion} />
            </>
          }
        />
        <Route
          path='/ExerciseList'
          element={
            <>
              <Header title={'LIBRARY'} />
              <ExerciseList list={list} userList={userList} expandedAccordion={expandedAccordion} setExpandedAccordion={setExpandedAccordion} />
            </>
          }
        />
        <Route
          path='/Create'
          element={
            <>
              <Header title={'CREATE'} />
              <Create userList={userList} expandedAccordion={expandedAccordion} setExpandedAccordion={setExpandedAccordion} />
            </>
          }
        />
        <Route
          path='/Settings'
          element={
            <>
              <Header title={'ABOUT'} />
              <Settings />
            </>
          }
        />
      </Routes>
      <Navigation />
    </Main>
  )
}

export default App

const Main = styled.main`
  display: flex;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  background-position: center;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
`

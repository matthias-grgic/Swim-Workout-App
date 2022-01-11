import styled from "styled-components"
import Create from "./components/Create"
import CurrentWorkout from "./components/CurrentWorkout"
import ExerciseList from "./components/ExerciseList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainRender from "./components/MainRender"
import Settings from "./components/Settings"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"

function App() {
    //EXERCISELIST - FETCH FROM API
    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("/getexerciselist")
                const api = await response.json()
                const exerciseList = api.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        type: item.type,
                        video: item.video,
                        definition: item.definition,
                        length: item.length,
                    }
                })
                setList(exerciseList)
            } catch (e) {
                console.error(e)
            }
        }
        return fetchMyAPI()
    }, [])

    //GENERATED WORKOUT LIST - FETCH FROM API
    const [wodList, setWodList] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("/getworkoutlist")
                const api = await response.json()
                const mappedWodList = api.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        type: item.type,
                        video: item.video,
                        definition: item.definition,
                        equipment: item.equipment,
                        length: item.length,
                    }
                })
                setWodList(mappedWodList)
            } catch (e) {
                console.error(e)
            }
        }
        return fetchMyAPI()
    }, [])

    return (
        <Main>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MainRender transferedList={list} />} />
                <Route path="/CurrentWorkout" element={<CurrentWorkout transferedWodList={wodList} />} />
                <Route path="/ExerciseList" element={<ExerciseList transferedList={list} />} />
                <Route path="/Create" element={<Create />} />
                <Route path="/Settings" element={<Settings />} />
            </Routes>
            <Footer />
        </Main>
    )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1rem;
`
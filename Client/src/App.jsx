import styled from "styled-components"
import Create from "./components/Create"
import CurrentWorkout from "./components/CurrentWorkout"
import GlobalStyle from "./globalStyles"
import ExerciseList from "./components/ExerciseList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainRender from "./components/MainRender"
import Settings from "./components/Settings"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("http://localhost:4000/test/get")
                const api = await response.json()
                const testlist = api.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        type: item.type,
                        video: item.video,
                        definition: item.definition,
                    }
                })
                setList(testlist)
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
                <Route path="/" element={<MainRender />} />
                <Route path="/CurrentWorkout" element={<CurrentWorkout />} />
                <Route path="/ExerciseList" element={<ExerciseList transferedList={list} />} />
                <Route path="/Create" element={<Create />} />
                <Route path="/Settings" element={<Settings />} />
            </Routes>
            <Footer />
        </Main>
    )
}

export default App

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1rem;
`

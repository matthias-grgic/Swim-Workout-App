import styled from "styled-components"
import Create from "./pages/Create"
import CurrentWorkout from "./pages/CurrentWorkout"
import ExerciseList from "./pages/ExerciseList"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import MainRender from "./pages/MainRender"
import Settings from "./pages/Settings"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("/api/getexerciselist")
                const api = await response.json()
                const exerciseList = api.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                        type: item.type,
                        video: item.video,
                        definition: item.definition,
                        length: item.length,
                        equipment: item.equipment,
                    }
                })
                setList(exerciseList)
            } catch (e) {
                console.error(e)
            }
        }
        return fetchMyAPI()
    }, [])

    const [wodList, setWodList] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("/api/getworkoutlist")
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <MainRender transferedList={list} />
                            <Header title={"SWIM"} />
                        </>
                    }
                />
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

const Main = styled.div`
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    /* background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
`

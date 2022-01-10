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

function App() {
    return (
        <Main>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MainRender />} />
                <Route path="/CurrentWorkout" element={<CurrentWorkout />} />
                <Route path="/ExerciseList" element={<ExerciseList />} />
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

import styled from "styled-components"
import GlobalStyle from "./globalStyles"
import ExerciseList from "./components/ExerciseList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainRender from "./components/MainRender"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <Main>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MainRender />} />
                <Route path="/ExerciseList" element={<ExerciseList />} />
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
    font-size: 1.5rem;
`

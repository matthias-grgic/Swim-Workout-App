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
import FetchFromApi from "./lib/fetchFromApi"

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
        FetchFromApi("/api/getexerciselist", setList)
    }, [])

    //Fetch UserExercises List
    useEffect(() => {
        FetchFromApi("/api/getUserExercises", setUserList)
    }, [])

    return (
        <Main>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
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
                            <Header title={"SWIM"} />
                        </>
                    }
                />
                <Route path="/CurrentWorkout" element={<CurrentWorkout wodList={wodList} lengthOfWod={lengthOfWod} switchOne={switchOne} switchTwo={switchTwo} setExpandedAccordion={setExpandedAccordion} />} />
                <Route path="/ExerciseList" element={<ExerciseList list={list} userList={userList} expandedAccordion={expandedAccordion} setExpandedAccordion={setExpandedAccordion} />} />
                <Route path="/Create" element={<Create userList={userList} expandedAccordion={expandedAccordion} setExpandedAccordion={setExpandedAccordion} />} />
                <Route path="/Settings" element={<Settings />} />
            </Routes>
            <Footer />
        </Main>
    )
}

export default App

const Main = styled.div`
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

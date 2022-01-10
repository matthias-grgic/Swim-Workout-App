import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import TestListRoutes from "../Server/routes/testList.routes.js"

const server = express()
const Port = process.env.SERVER_PORT || 4000

//MIDDLEWARE
server.use(express.json())
server.use(cors())

// dotenv.config()
const connectionString = "mongodb://localhost:27017/exerciseTest"
mongoose.connect(connectionString)

//Test
server.get("/", (req, res) => {
    res.json({ status: "Running" })
})

//Routes
server.use("/test", TestListRoutes)

//RUN SERVER
server.listen(Port, () => console.log("Server is running"))

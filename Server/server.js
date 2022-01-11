import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import ServerRoutes from "./routes/server.routes.js"
import dotenv from "dotenv"

const server = express()
const Port = process.env.SERVER_PORT || 4000

//MIDDLEWARE
server.use(express.json())
server.use(cors())

// dotenv.config()
const connectionString = "mongodb://localhost:27017/exerciseTest"
mongoose.connect(connectionString)

//Routes
server.use("/", ServerRoutes)

//RUN SERVER
server.listen(Port, () => console.log("Server is running"))

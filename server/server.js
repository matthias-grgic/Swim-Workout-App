import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import ServerRoutes from "./routes/server.routes.js"
import dotenv from "dotenv"
import { dirname } from "./lib/pathHelpers.js"

const __dirname = dirname(import.meta.url)
const server = express()
dotenv.config()
const Port = process.env.SERVER_PORT || 4000

//MIDDLEWARE
server.use(express.json())
server.use(cors())

//DATABASE
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(connectionString)

//Routes
server.use(express.static(path.join(__dirname, "../cli")))
server.use("/", ServerRoutes)

//RUN SERVER
server.listen(Port, () => console.log("Server is running"))

import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import path from "path"
import dotenv from "dotenv"
import ServerRoutes from "./routes/server.routes.js"

dotenv.config()

const serverPort = process.env.PORT || 4000

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
mongoose.connect(connectionString)

const __dirname = process.cwd()

const server = express()
server.use(cors())
server.use(express.json())

//Routes
server.use("/api", ServerRoutes)

server.use(express.static(path.join(__dirname, "./client/dist")))

server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist", "index.html"))
})

//RUN SERVER
server.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`))

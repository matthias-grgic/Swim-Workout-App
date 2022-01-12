import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import path from "path"
import dotenv from "dotenv"
import ServerRoutes from "./routes/server.routes.js"

dotenv.config()

const PORT = process.env.PORT || 4000

const dbUser = process.env.dbUser
const dbPassword = process.env.dbPassword
const dbHost = process.env.dbHost
const dbName = process.env.dbName

const connectionString = `mongodb+srv://workoutadmin2000:BBpksjDuGqUS4f5@cluster0.4vd0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(connectionString)

const __dirname = process.cwd()

const server = express()
server.use(cors())
server.use(express.json())

//Routes
server.use("/", ServerRoutes)

server.use(express.static(path.join(__dirname, "./client/dist")))

server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist", "index.html"))
})

//RUN SERVER
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

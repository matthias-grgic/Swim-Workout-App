import express from "express"
// import cors from "cors"
import mongoose from "mongoose"
import ServerRoutes from "./routes/server.routes.js"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { dirname as dirnameFromPath } from "path"
import path from "path"

dotenv.config()

function dirname(importMetaUrl) {
    return fileURLToPath(dirnameFromPath(importMetaUrl))
}
const __dirname = dirname(import.meta.url)

const PORT = process.env.PORT || 4000

//DATABASE
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(connectionString)

const server = express()
//MIDDLEWARE
server.use(express.json())
// server.use(cors())

// Serve static files from the React app
server.use(express.static(path.join(__dirname, "../client/dist")))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// server.get("/*", (_req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
// })

//Routes
server.use("/", ServerRoutes)

//RUN SERVER
server.listen(PORT, () => console.log("Server is running"))
